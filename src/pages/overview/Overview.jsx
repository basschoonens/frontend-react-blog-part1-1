import './Overview.css';
import {useEffect, useState} from "react";
import axios from "axios";
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";

export default function Overview() {

    const [posts, setPosts] = useState([]);
    const {register, handleSubmit, setValue} = useForm();
    const [deleteIsSuccess, setDeleteIsSuccess] = useState(false);

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

        void fetchAllPosts();
    }, []);

    async function handleDelete(data) {
        try {
            await axios.delete(`http://localhost:3000/posts/${data.id}`);
            setValue("id", '');
            setDeleteIsSuccess(true);
            setTimeout(() => {
                setDeleteIsSuccess(false);
            }, 3000);
            const result = await axios.get('http://localhost:3000/posts');
            console.log(result.data)
            setPosts(result.data);
        } catch (error) {
            console.log('error deleting post', error);
        }
    }

    return (
        <>
            <div className="overview">
                <div className="overview-container">
                    <h1>Overview</h1>
                    <ul>
                        {posts.map((post) => (
                            <li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
                        ))
                        }
                    </ul>
                    <h2>Delete post</h2>
                    {deleteIsSuccess && <p>Post is verwijderd!</p>}
                    <form className="delete-post" onSubmit={handleSubmit(handleDelete)}>
                        <label>Post ID</label>
                        <input
                            type="text"
                            placeholder="Type ID here"
                            {...register("id", {required: true})}
                        />
                        <button type="submit">Delete</button>
                    </form>
                </div>
            </div>
        </>
    )
}