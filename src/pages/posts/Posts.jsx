import './Posts.css';
import { useParams } from 'react-router-dom';

export default function Posts() {
    const { id } = useParams();

    return (
        <div className="posts">
            <div className="posts-container">
                <h1>Dit is de post van {id}</h1>
            </div>
        </div>
    )
}