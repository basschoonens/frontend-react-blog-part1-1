import './NotFound.css';
import {Link} from "react-router-dom";

export default function NotFound() {
    return (
        <main className="not-found-container">
                <h1>Not Found</h1>
                <p>Sorry, the page you are looking for does not exist.</p>
                <p>Go back to <Link className="home-link" to="/">Home</Link>.</p>
        </main>
    )
}