import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navigation from '../components/Navigation'

function AddCoursePage() {
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [par, setPar] = useState('')
    const [distance, setDistance] = useState('')
    const [slope, setSlope] = useState('')

    const navigate = useNavigate();

    const [isHelpVisible, setHelpVisible] = useState(false)

    const addCourse = async() => {
        const newCourse = {name, location, par, distance, slope}
        const response = await fetch(
            "http://localhost:3000/courses", {
                method: "POST",
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(newCourse)
            }
        )
        if (response.status !== 201) {
            alert("Failed to add club, status code =" + response.status)
        }
        navigate("/home")
    }

    return (
        <>
            <Navigation />
            <div>
                <form>
                    <fieldset>
                        <legend>Add Course</legend>
                        <input 
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            required />
                        <input 
                            type="text"
                            placeholder="Location"
                            value={location}
                            onChange={e => setLocation(e.target.value)}
                            required />
                        <input 
                            type="number"
                            placeholder="Par"
                            value={par}
                            onChange={e => setPar(e.target.valueAsNumber)} 
                            required />
                        <input 
                            type="number"
                            placeholder="Distance"
                            value={distance}
                            onChange={e => setDistance(e.target.valueAsNumber)} 
                            required />
                        <input 
                            type="number"
                            placeholder="Slope"
                            value={slope}
                            onChange={e => setSlope(e.target.valueAsNumber)}
                            required />
                    </fieldset>
                </form>
                <div className="hidden-help">
                    <button onClick={() => setHelpVisible(!isHelpVisible)}>
                        {isHelpVisible ? "Hide Help" : "Need Help"}
                    </button>
                    {isHelpVisible && (
                        <div>
                            <div>Name: What is the course called</div>
                            <div>Location: Where is it</div>
                            <div>Par: The combined total of all hole pars</div>
                            <div>Distance: How many yards is the course total</div>
                            <div>Slope: The Difficulty Rating of the Course</div>
                        </div>
                    )}
                </div>
                <button onClick={addCourse}>Submit</button>
            </div>
        </>

    )
}

export default AddCoursePage