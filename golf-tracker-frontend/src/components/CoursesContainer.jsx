import "../App.css"
import CourseCard from "./CourseCard"
import { Link } from 'react-router-dom'

function CoursesContainer({courses, handleDelete, handleEdit}) {

    return (
        <section className="courses">
            <h2 className="column-header">COURSES 
                <Link to="/add/course" className="plus-link">+</Link> 
            </h2>
            
            {courses.map((course) => (
                <CourseCard 
                    key={course._id}
                    id={course._id}
                    name={course.name}
                    city={course.city}
                    state={course.state}
                    par={course.par}
                    distance={course.distance}
                    slope={course.slope}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                />
            ))}
            <div className="add-button green">
               <Link to="/add/course" className='nav-card'>Add Course +</Link>
            </div>
        </section>
    )
}

export default CoursesContainer