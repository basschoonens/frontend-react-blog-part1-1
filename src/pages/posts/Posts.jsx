// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './Posts.css';
import posts from "../../constants/data.json";
import {useParams, useNavigate, Link} from 'react-router-dom';
import {dateFormat} from "../../helpers/dateFormat.js";

export default function Posts() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const foundPost = posts.find(post => post.id.toString() === id);
        if (!foundPost) {
            navigate("/NotFound");
        } else {
            setPost(foundPost);
        }
    }, [id, navigate]);

    if (!post) {
        return null;
    }

    return (
        <div className="single-post">
            <div className="post-container">
                <h1>{post.title}</h1>
                <h2>{post.subtitle}</h2>
                <p>Geschreven door {post.author} op {dateFormat(post.created)}</p>
                <p> {post.readTime} minuten lezen</p>
                <p>{post.content}</p>
                <p>{post.comments} reacties - {post.shares} keer gedeeld</p>

                <Link to="/overview">&lt; Terug naar overzicht</Link>
            </div>
        </div>
    );
}