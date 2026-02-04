import "../App.css"
import ClubCard from "./ClubCard"
import { Link } from 'react-router-dom'

function ClubContainer({clubs, handleDelete, handleEdit}) {
    return (
        <section className="clubs">
            <h2 className="column-header">CLUBS
                <Link to="/add/clubs" className="plus-link">+</Link> 
            </h2>

            {clubs.map((club) => (
                <ClubCard 
                    key={club._id}
                    id={club._id}
                    type={club.type}
                    brand={club.brand}
                    model={club.model}
                    year={club.year}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                />
            ))}
            <div className="add-button">
               <Link to="/add/club" className='nav-card'>Add Club +</Link>
            </div>
        </section>
    )
}

export default ClubContainer