import "../App.css"
import { MdDeleteForever } from 'react-icons/md';

function ClubCard({id, type, brand, handleDelete, model=undefined, year=undefined}) {
    return (
        <div className="club-card">
            <div className="club-info">
                <strong>{type}</strong>
                <div className="club-brand">
                    {brand}
                    {model && `, ${model}`}
                    {year && `, ${year}`}
                </div>
            </div>
            <button onClick={() => {
                console.log("ID BEING DELETED: ", id)
                handleDelete(id, 'clubs')}} className="delete-btn">
                <MdDeleteForever />
            </button>
        </div>
    )
}

export default ClubCard;
