import { useState, useEffect } from 'react';
import ClubContainer from '../components/ClubsContainer';
import CoursesContainer from '../components/CoursesContainer';
import RoundsContainer from '../components/RoundsContainer';
import Navigation from '../components/Navigation';

export default function HomePage() {
    const [clubs, setClubs] = useState([]);
    const [courses, setCourses] = useState([]);
    const [rounds, setRounds] = useState([]);

    const loadClubs = async () => {
        try {
            const response = await fetch(
            "http://localhost:3000/clubs"
        )
            const clubsList = await response.json();
            console.log(clubsList)
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
            setRounds(roundsList)
        }
        catch (err) {
            console.error("Failed to fetch rounds : ", err)
        }
    }

    const handleDelete = async (id, endpoint) => {
        const result = window.confirm(
            "Are you sure you want to delete? This item will be gone forever."
        );

        if (!result) return;

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
    }

    useEffect( () => {
        loadClubs();
        loadCourses();
        loadRounds();
    }, [] )

    return (
        <>
            <Navigation courses={courses}/>
            <ClubContainer clubs={clubs} handleDelete={handleDelete}/>
            <RoundsContainer rounds={rounds} handleDelete={handleDelete}/>
            <CoursesContainer courses={courses} handleDelete={handleDelete}/>
        </>
    )
}