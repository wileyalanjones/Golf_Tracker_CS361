import { Link } from "react-router-dom";

function Navigation() {
    return (
        <nav className="app-nav">
            <Link to="/home" className='nav-link'>Home</Link>
            <Link to="/add/club" className='nav-link'>Add Club</Link>
            <Link to='/add/course' className="nav-link">Add Course</Link>
            <Link to='/add/round' className="nav-link">Add Round</Link>
        </nav>
    )
}

export default Navigation;