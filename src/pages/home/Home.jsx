import './Home.css';
import {Link} from "react-router-dom";

export default function Home() {

    return (
        <>
            <div className="home">
                <div className="home-container">
                    <h1>Home</h1>
                    <Link to="/overview">Ga naar de posts</Link>
                </div>
            </div>
        </>
    )
}