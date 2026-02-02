import "../App.css"
import { MdDeleteForever } from 'react-icons/md';
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { useState } from 'react'

function CourseCard({id, name, location, par, distance, slope, handleDelete}) {
    const [isInfoVisible, setIsinfoVisible] = useState(false)
    
    return (
        <div className="course-card">
            <div className="course-info">
                <strong>{name}</strong>
                <button onClick={() => setIsinfoVisible(!isInfoVisible)}>
                    {isInfoVisible ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                </button>
                {isInfoVisible && (
                    <div>
                        <div>{location}</div>
                        <div>{par}</div>
                        <div>{distance}</div>
                        <div>{slope}</div>
                    </div>
                )}
            </div>
            <button onClick={() => {
                handleDelete(id, 'courses')}} className="delete-btn">
                <MdDeleteForever />
            </button>
        </div>
    )
}

export default CourseCard;