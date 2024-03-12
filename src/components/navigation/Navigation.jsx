import logomedium from '../../assets/logo-medium.png';
import './Navigation.css';
import {NavLink} from "react-router-dom";

export default function Navigation() {
    return (
        <nav>
            <div className="navbar">
            <span className="navbar-logo-img">
                <img src={logomedium} alt="Blog Logo"/>
            </span>
                <ul className="nav-links">
                    <li>
                        <NavLink className={({isActive}) => isActive ? "active-link" : "default-link"} to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => isActive ? "active-link" : "default-link"} to="/newpost">New Post</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => isActive ? "active-link" : "default-link"} to="/overview">Overview</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}