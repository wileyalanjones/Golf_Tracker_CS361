import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Navigation from '../components/Navigation'

function AddRoundPage() {
    const location = useLocation();
    const navigate = useNavigate()
    
    const [courses, setCourses] = useState(location.state?.courses || []);
    const [date, setDate] = useState('')
    const [courseId, setCourseId] = useState('')
    const [strokes, setStrokes] = useState('')
    const [score, setScore] = useState('')

    useEffect(() => {
        if (courses.length === 0) {
            const loadCourses = async () => {
                const response = await fetch("http://localhost:3000/courses");
                const data = await response.json();
                setCourses(data)
        }
        loadCourses();
    }
    }, [courses.length])

    const [isHelpVisible, setHelpVisible] = useState(false)

    const addRound = async() => {
        const newRound = {date, course: courseId, strokes, score}
        const response = await fetch(
            "http://localhost:3000/rounds", {
                method: "POST",
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(newRound)
            }
        )
        if (response.status === 201) {
            navigate('/home')
        }
        else {
            alert("Failed to add club, status code =" + response.status)
        }
    }

    return (
        <>
            <Navigation />
            <div>
                <form>
                    <fieldset>
                        <legend>Add Round</legend>

                        <input 
                            type="date"
                            placeholder="Date"
                            value={date}
                            onChange={e => setDate(e.target.value)}
                            required />

                        <select 
                            value={courseId} 
                            onChange={e => setCourseId(e.target.value)}
                            required
                        >
                            <option value=''>Select a Course</option>
                            {courses.map(c => (
                                <option key={c._id} value={c._id}>
                                    {c.name}
                                </option>
                            ))}
                        </select>
                        
                        <input 
                            type="number"
                            placeholder="Strokes"
                            value={strokes}
                            onChange={e => setStrokes(e.target.valueAsNumber)} 
                            required />

                        <input 
                            type="number"
                            placeholder="Score"
                            value={score}
                            onChange={e => setScore(e.target.valueAsNumber)} 
                            required />

                    </fieldset>
                </form>

                <div className="hidden-help">
                    <button onClick={() => setHelpVisible(!isHelpVisible)}>
                        {isHelpVisible ? "Hide Help" : "Need Help"}
                    </button>
                    {isHelpVisible && (
                        <div>
                            <div>Date: When the Round was played</div>
                            <div>Course: Where was it played</div>
                            <div>Strokes: Total Swings taken in Round</div>
                            <div>Score: Final Strokes minus Par</div>
                        </div>
                    )}
                </div>
                <button onClick={addRound}>Submit</button>
            </div>
        </>

    )
}

export default AddRoundPage