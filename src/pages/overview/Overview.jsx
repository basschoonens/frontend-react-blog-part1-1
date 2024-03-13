import './Overview.css';
import posts from "../../constants/data.json";

export default function Overview() {

    return (
        <div className="overview">
            <div className="overview-container">
                <h1>Bekijk alle {posts.length} posts op het platform.</h1>
                <ul className="overview-posts">
                    {posts.map((post) => (
                        <li key={post.id}>
                            <h2>{post.title}</h2>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}