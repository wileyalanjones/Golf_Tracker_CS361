import "../App.css"
import { MdDeleteForever, MdModeEdit } from "react-icons/md"

function RoundCard({id, date, course, strokes, score, weather, handleDelete, handleEdit}){

    const newDate = new Date(date)
    const temp = String(weather.temperature.max).slice(0,2)
    const degree = '\u00b0'

    const formattedDate = Intl.DateTimeFormat('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric'
    }).format(newDate);

    return (
        <div className="card round">
            <div className="card-header">
                <div className="round-info">
                    {formattedDate} | {course.name} | Strokes: {strokes} | Score: {score} | Temp: {temp}{degree}F 
                </div>
            </div>
            <div className="icon-group">
                <button
                    onClick={() => handleEdit("round", id)}
                    className="edit-btn">
                    <MdModeEdit />
                </button>

                <button
                    onClick={() => handleDelete(id, "rounds")}
                    className="delete-btn">
                    <MdDeleteForever />
                </button>
            </div>
        
        </div>
    )
}

export default RoundCard