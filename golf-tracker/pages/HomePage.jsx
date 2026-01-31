import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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

    useEffect( () => {
        loadClubs();
    }, [] )

    return (
        <>
           {clubs.map((club, index) => (
            <div key={index}>
                {club.type}
            </div>
           ))} 
        </>
    )
}