import "../App.css"
import RoundCard from "./RoundCard"

function RoundsContainer({rounds, handleDelete}) {
    return (
        <section className="courses">
            <h2>ROUNDS</h2>

            {rounds.map((round) => (
                <RoundCard
                    key={round._id}
                    id={round._id}
                    date={round.date}
                    course={round.course}
                    strokes={round.strokes}
                    score={round.score}
                    handleDelete={handleDelete}
                />
            ))}
        </section>
    )
}

export default RoundsContainer