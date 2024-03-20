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
                            <div className="post-overview-container">
                                <div className="post-title-author">
                                    <h2>{post.title}</h2><h2>{post.author}</h2>
                                </div>
                                <div className="post-details">
                                <p>{post.comments} reacties</p>-<p>{post.shares} keer gedeeld.</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}