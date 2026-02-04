import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
        <div className='login-page'>
            <h1>Welcome to Wiley Golf Tracker</h1>
            <div className='app-body'>
                <form onSubmit={(e) => { e.preventDefault(); addLogin(); }}>
                    <fieldset>
                        <input type='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
                        <input type='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)}/>
                    </fieldset>
                </form>
                <button onClick={addLogin}>Login</button>
            </div>
            <p>Track your clubs, courses, rounds, and stats! See your progress and save your favorite courses and rounds</p>
        </div>

    )
}
