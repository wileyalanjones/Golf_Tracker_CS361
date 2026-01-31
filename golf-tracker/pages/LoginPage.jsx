import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const addLogin = async () => {
        const newLogin = {email, password}
        const response = await fetch(
            "http://localhost:3000/", {
                method: "POST",
                headers: {"Content-type": 'application/json'},
                body: JSON.stringify(newLogin)
            }
        )
        if (response.status === 201) {
            navigate("/home")
        }
        else {
            alert("Please enter the correct login information")
        }
    }

    return (
        <>
            <div>
                Welcome to the Golf Tracker App
            </div>
            <div className='app-body'>
                <form onSubmit={(e) => { e.preventDefault(); addLogin(); }}>
                    <fieldset>
                        <input type='email' placeholder='email' value={email} onChange={e => setEmail(e.target.value)}/>
                        <input type='password' placeholder='password' value={password} onChange={e => setPassword(e.target.value)}/>
                    </fieldset>
                </form>
                <button onClick={addLogin}>Login</button>
            </div>
        </>

    )
}
