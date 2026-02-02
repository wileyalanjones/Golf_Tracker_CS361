import "../App.css"
import ClubCard from "./ClubCard"

function ClubContainer({clubs, handleDelete}) {
    return (
        <section className="clubs">
            <h2>CLUBS</h2>

            {clubs.map((club) => (
                <ClubCard
                    key={club._id}
                    id={club._id}
                    type={club.type}
                    brand={club.brand}
                    model={club.model}
                    year={club.year}
                    handleDelete={handleDelete}
                />
            ))}
        </section>
    )
}

export default ClubContainer