import "../App.css"
import { MdDeleteForever } from "react-icons/md"

function RoundCard({id, date, course, strokes, score, handleDelete}){
    return (
        <div className="round-card">
            <div className="round-info">
                {date} | {course.name} | {strokes} | {score}
            </div>
            <button onClick={() => {
                handleDelete(id, 'rounds')}} className="delete-btn">
                <MdDeleteForever />
            </button>         
        </div>
    )
}

export default RoundCard