import "../App.css"
import CourseCard from "./CourseCard"

function CoursesContainer({courses, handleDelete}) {

    return (
        <section className="courses">
            <h2>COURSES</h2>

            {courses.map((course) => (
                <CourseCard
                    key={course._id}
                    id={course._id}
                    name={course.name}
                    location={course.location}
                    par={course.par}
                    distance={course.distance}
                    slope={course.slope}
                    handleDelete={handleDelete}
                />
            ))}
        </section>
    )
}

export default CoursesContainer