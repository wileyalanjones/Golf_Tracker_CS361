import "../App.css"
import { MdDeleteForever } from "react-icons/md"

function RoundCard({id, date, course, strokes, score, handleDelete, handleEdit}){
    return (
        <div className="round-card">
            <div className="round-info">
                {date} | {course.name} | {strokes} | {score}
            </div>
            <button onClick={
                () => handleEdit("round", id)} className="edit-btn">
                    Edit
            </button>
            <button onClick={() => {
                handleDelete(id, 'rounds')}} className="delete-btn">
                <MdDeleteForever />
            </button>         
        </div>
    )
}

export default RoundCard