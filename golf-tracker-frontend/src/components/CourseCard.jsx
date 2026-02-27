import "../App.css"
import { MdDeleteForever, MdModeEdit } from 'react-icons/md';
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { useState } from 'react'

function CourseCard({id, name, city, state, par, distance, slope, handleDelete, handleEdit}) {
    const [isInfoVisible, setIsinfoVisible] = useState(false)
    
    return (
        <div className="card course">
            <div className="course-header">
                <strong>{name}</strong>
                <div className="icon-group">
                    <button onClick={
                        () => handleEdit("course", id)} className="icon-btn">
                        <MdModeEdit />
                    </button>
                    <button onClick={() => {
                        handleDelete(id, 'courses')}} className="icon-btn">
                        <MdDeleteForever />
                    </button>
                    <button onClick={() => setIsinfoVisible(!isInfoVisible)} className="icon-btn">
                        {isInfoVisible ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                    </button>
                </div>
            </div>
            <div>
                {isInfoVisible && (
                    <div className="course-details">
                        <div>City: {city}</div>
                        <div>State: {state}</div>
                        <div>Par: {par}</div>
                        <div>Distance: {distance} Yards</div>
                        <div>Slope: {slope}</div>
                    </div>  
                )}

            </div>

        </div>
    )
}

export default CourseCard;