import { Link } from "react-router-dom";

function Navigation({courses}) {
    return (
        <nav className="app-nav">
            <Link to="/home" className='home-link'>Home</Link>{" "}
            <Link to="/add/club" className='add-club-link'>Add Club</Link>
            <Link to='/add/course' className="add-course-link">Add Course</Link>
            <Link to='/add/round' className="add-round-link">Add Round</Link>
        </nav>
    )
}

export default Navigation;