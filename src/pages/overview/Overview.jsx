import './Overview.css';
import posts from "../../constants/data.json";
import {useEffect, useState} from "react";
import axios from "axios";

export default function Overview() {


    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchAllPosts() {
            try {
                const result = await axios.get('http://localhost:3000/posts');
                console.log(result.data)
                setPosts(result.data);
            } catch (e) {
                console.error(e);
            }
        }

        fetchAllPosts();

    }, []);


    return (
        <>
            <h1>App</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))
                }
            </ul>
        </>
    )
}