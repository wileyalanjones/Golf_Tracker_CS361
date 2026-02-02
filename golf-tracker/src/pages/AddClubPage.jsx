import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navigation from '../components/Navigation'

function AddClubPage() {
    const [type, setType] = useState('')
    const [brand, setBrand] = useState('')
    const [model, setModel] = useState('')
    const [year, setYear] = useState('')

    const navigate = useNavigate();

    const [isHelpVisible, setHelpVisible] = useState(false)

    const addClub = async() => {
        const newClub = {type, brand, model, year}
        const response = await fetch(
            "http://localhost:3000/clubs", {
                method: "POST",
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(newClub)
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
                        <legend>Add Club</legend>
                        <input 
                            type="text"
                            placeholder="Type"
                            value={type}
                            onChange={e => setType(e.target.value)}
                            required />
                        <input 
                            type="text"
                            placeholder="Brand"
                            value={brand}
                            onChange={e => setBrand(e.target.value)}
                            required />
                        <input 
                            type="text"
                            placeholder="Model (Optional)"
                            value={model}
                            onChange={e => setModel(e.target.value)} />
                        <input 
                            type="text"
                            placeholder="Year (Optional)"
                            value={year}
                            onChange={e => setYear(e.target.value)} />
                    </fieldset>
                </form>
                <div className="hidden-help">
                    <button onClick={() => setHelpVisible(!isHelpVisible)}>
                        {isHelpVisible ? "Hide Help" : "Need Help"}
                    </button>
                    {isHelpVisible && (
                        <div>
                            <div>Type: What club is it (i.e. Driver, 7-Iron)</div>
                            <div>Brand: Who Makes it (i.e. Ping, Calloway)</div>
                            <div>Model: What style is it (i.e. Big Bertha, Prime Tyne)</div>
                            <div>Year: What year was it made</div>
                        </div>
                    )}
                </div>
                <button onClick={addClub}>Submit</button>
            </div>
        </>

    )
}

export default AddClubPage