import './NewPost.css';
import {useState} from "react";
import {useForm} from "react-hook-form";
import readTime from "../../helpers/readTime.js";
import {useNavigate} from "react-router-dom";
import axios from "axios";

export default function NewPost() {

    const {register, handleSubmit, formState: {errors}} = useForm();
    const navigate = useNavigate();
    const [isSuccess, setIsSuccess] = useState(false);

    async function handleFormSubmit(data) {
        const dateCreated = new Date().toISOString();
        const comments = 0;
        const shares = 0;

        const enrichedData = {
            ...data,
            dateCreated,
            readTime: readTime(data.blogpost),
            comments,
            shares
        }

        try {
            await axios.post('http://localhost:3000/posts', enrichedData);


            setIsSuccess(true);

            setTimeout(() => {
                setIsSuccess(false);
                navigate("/overview")
            }, 3000);
        } catch (error) {
            console.log('error creating post', error);
        }
    }

    return (
        <div className="new-post">
            <div className="new-post-container">
                <h1>Post toevoegen</h1>
                {isSuccess && <p>Post is toegevoegd!</p>}
                <form className="new-post-form" onSubmit={handleSubmit(handleFormSubmit)}>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        placeholder="Title"
                        {...register("title", {required: true})}
                    />
                    {errors.title && <p>Title is required</p>}
                    <label htmlFor="subtitle">Subtitle</label>
                    <input
                        type="text"
                        placeholder="Subtitle"
                        {...register("subtitle", {required: true})}
                    />
                    {errors.subtitle && <p>Subtitle is required</p>}
                    <label htmlFor="author">Author</label>
                    <input
                        type="text"
                        placeholder="Author"
                        {...register("author", {required: true})}
                    />
                    {errors.author && <p>Author is required</p>}
                    <label htmlFor="blogpost">Blogpost</label>
                    <textarea rows={10} cols={50}
                              {...register("blogpost", {required: true, minLength: 300, maxLength: 2000})}
                    />
                    {errors.blogpost && errors.blogpost.type === "required" && (
                        <p>Blogpost is required</p>
                    )}
                    {errors.blogpost && errors.blogpost.type === "minLength" && (
                        <p>Blogpost must be at least 300 characters long</p>
                    )}
                    {errors.blogpost && errors.blogpost.type === "maxLength" && (
                        <p>Blogpost cannot exceed 2000 characters</p>
                    )}
                    <button type="submit">Toevoegen</button>
                </form>
            </div>
        </div>
    )
}