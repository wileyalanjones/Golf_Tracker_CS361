import "../App.css"
import RoundCard from "./RoundCard"
import { Link } from 'react-router-dom'
 
function RoundsContainer({rounds, handleDelete, handleEdit}) {
    return (
        <section className="rounds">
            <h2 className="column-header">ROUNDS
                <Link to="/add/round" className="plus-link">+</Link> 
            </h2>

            {rounds.map((round) => (
                <RoundCard 
                    key={round._id}
                    id={round._id}
                    date={round.date}
                    course={round.course}
                    strokes={round.strokes}
                    score={round.score}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                />
            ))}

            <div className="add-button purple">
               <Link to="/add/round" className='nav-card'>Add Round +</Link>
            </div>
        </section>
    )
}

export default RoundsContainer