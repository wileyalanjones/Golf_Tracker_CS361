import { useState, useEffect } from 'react';
import ClubContainer from '../components/ClubsContainer';
import CoursesContainer from '../components/CoursesContainer';
import RoundsContainer from '../components/RoundsContainer';
import Navigation from '../components/Navigation';
import { useNavigate } from 'react-router-dom';
import ConfirmDialog from '../components/ConfirmDialog';
import JokeQuoteDialog from '../components/JokeQuoteDialog';

export default function HomePage() {

    const [clubs, setClubs] = useState([]);
    const [courses, setCourses] = useState([]);
    const [rounds, setRounds] = useState([]);
    const [showConfirm, setShowConfirm] = useState(false);
    const [pendingDelete, setPendingDelete] = useState(undefined);
    const [handicap, setHandicap] = useState(undefined);
    const [handicapPossible, setHandicapPossible] = useState(false)
    const [jokeQuote, setJokeQuote] = useState(undefined)
    const [showJokeQuote, setShowJokeQuote] = useState(false)

    const navigate = useNavigate();

    const loadClubs = async () => {
        try {
            const response = await fetch(
            "http://localhost:3000/clubs"
        )
            const clubsList = await response.json();
            setClubs(clubsList)
        }
        catch (err) {
            console.error("Failed to fetch clubs: ", err)
        }
    };

    const loadCourses = async () => {
        try {
            const response = await fetch(
            "http://localhost:3000/courses"
        )
            const coursesList = await response.json();
            setCourses(coursesList)
        }
        catch (err) {
            console.error("Failed to fetch courses : ", err)
        }
    }

    const loadRounds = async () => {
        try {
            const response = await fetch(
            "http://localhost:3000/rounds"
        )
            const roundsList = await response.json();
            const sortedRoundsList = await [...roundsList].sort(
                (a, b) => new Date(b.date) - new Date(a.date))

            setRounds(sortedRoundsList)
        }
        catch (err) {
            console.error("Failed to fetch rounds : ", err)
        }
    }

    const getHandicap = async (rounds) => {
        const handicapArray = []
        const handicapObject = {'rounds': handicapArray}
        for (const round of rounds) {
            const handicapRound = {
                'score': round.strokes, 
                'par': round.course.par, 
                'slope': round.course.slope
            }
            handicapArray.push(handicapRound)
        }
        console.log(handicapObject)
        try {
            const response = await fetch(
                'http://localhost:5888/handicap', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(handicapObject)
                }
            )
            const handicapIndex = await response.json();
            setHandicap(handicapIndex.Handicap)
        } 
        catch (err) {
            console.error("Failed to fetch handicap: ", err)
        }
    }

    const getJoke = async () => {
        try {
            const response = await fetch(
                'http://localhost:5539/', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                }
            )
            const joke = await response.json()
            setJokeQuote(joke.joke)
        }
        catch (err) {
            console.error("Failed to fetch Joke: ", err)
        }
        finally {
            setShowJokeQuote(true)
        }
    }

    const getQuote = async () => {
        try {
            const response = await fetch(
                'https://buddha-quote-gen.onrender.com/', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                }
            )
            const quote = await response.json()
            setJokeQuote(quote.text)
        }
        catch (err) {
            console.error("Failed to fetch Joke: ", err)
        }
        finally {
            setShowJokeQuote(true)
        }
    }

    const cancelJokeQuote = async () => {
        setShowJokeQuote(false)
    }

    const handleDelete = async (id, endpoint) => {
        setPendingDelete({id, endpoint});
        setShowConfirm(true);
    }

    const confirmDelete = async () => {
        if (!pendingDelete) return;

        const { id, endpoint } = pendingDelete

        try {
            const response = await fetch(
            `http://localhost:3000/${endpoint}/${id}`,
            { method: "DELETE" }
            );
        
            if (response.status === 204) {
                switch (endpoint) {
                    case "clubs":
                        setClubs(clubs.filter((club) => club._id !== id))
                        break;
                    case "courses":
                        setCourses(courses.filter((course) => course._id !== id))
                        break;
                    case "rounds":
                        setRounds(rounds.filter((round) => round._id !== id))
                        break;
                    default:
                        console.warn("No endpoint match for ", endpoint)
                }
            } else {
                alert(`Failed to delete. Status: ${response.status}`);
            }
        } 
        catch (err) {
            console.error("Error during delete: ", err)
        }
        finally {
            setShowConfirm(false);
            setPendingDelete(undefined);
        }
    }

    const cancelDelete = () => {
        setShowConfirm(false);
        setPendingDelete(undefined)
    }

    const handleEdit = (type, id) => {
        navigate(`/edit/${type}/${id}`)
    }

    useEffect( () => {
        loadClubs();
        loadCourses();
        loadRounds();
    }, [] )

    useEffect(() => {
    if (Array.isArray(rounds)) {
        if (rounds.length >= 3) {
            getHandicap(rounds);
            setHandicapPossible(true)
            console.log(handicap)
        }
        else {
            setHandicapPossible(false)
        }
    }

    }, [rounds]);

    return (
        <>
            <Navigation courses={courses}/>
            <div className='page-title'>
                <h1 >HOME PAGE</h1>
                <p >Welcome to Wiley's Golf Tracker. Enter in your clubs, your courses, and your rounds to track your golf progress!</p>

                <p>Golf can be frustrating! If you ever need a laugh or zen click the buttons below!</p>
                <div className='joke-quote'>
                    <button className="joke-quote-btn" onClick={getJoke}>Get Joke</button> 
                    <button className="joke-quote-btn"onClick={getQuote}>Get Bhudda Quote</button>
                </div>
                <div>
                    <h3 className='handicap'>{handicapPossible ? `Current handicap: ${Math.round(handicap)}` : "Play at least 3 rounds to see your handicap!"}</h3>
                </div>
            

            </div>

            <div className='containers'>
                <ClubContainer className="column"
                    clubs={clubs} 
                    handleDelete={handleDelete} 
                    handleEdit={handleEdit}
                    />
                <RoundsContainer className='column'
                    rounds={rounds} 
                    handleDelete={handleDelete} 
                    handleEdit={handleEdit}
                    />
                <CoursesContainer className="column"
                    courses={courses} 
                    handleDelete={handleDelete} 
                    handleEdit={handleEdit}
                    />
            </div>

            <ConfirmDialog
                isOpen={showConfirm}
                message="Are you sure you want to delete? This item will be gone forever."
                onConfirm={confirmDelete}
                onCancel={cancelDelete}
            />

            <JokeQuoteDialog
                isOpen={showJokeQuote}
                message={jokeQuote}
                onCancel={cancelJokeQuote}
            />
        </>
    )
}