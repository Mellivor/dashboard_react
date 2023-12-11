import { useAuthContext } from '../../hook/useAuthContext';
import { usePostsContext } from '../../hook/usePostsContext';
import stile from './PostForm.module.css';
import { useRef } from 'react';
import axios from 'axios';


export default function PostsForm(props) {
    const url = "https://expressmongo.netlify.app/api/posts/";
    // const url = "http://localhost:57312/api/posts/";
    const { user } = useAuthContext()
    const { posts, dispatch } = usePostsContext()

    const sendPost = async (post) => {
        try {
            const newPost = await axios.post(url, {
                author: user.name,
                userid: user._id,
                body: post
            })
            console.log(newPost);
            dispatch({ type: 'CREATE_POST', payload: newPost.data })
        } catch (error) {
            console.log(error.mesage);
        }
    }

    function handleClick(e) {
        e.preventDefault()

        if (!inputRef.current.value) {
            return
        }

        sendPost(inputRef.current.value)
        // console.log(inputRef.current.value);
        inputRef.current.value = ""
    }

    const inputRef = useRef(null);

    return (
        <form className={stile.form}>
            <div className={stile.wrapper}>
                <textarea autoComplete="off" required={true} className={stile.input} ref={inputRef} />
                <div className={stile.controls}>
                    <input className={stile.button} onClick={handleClick} type="submit" value="Створити пост" />
                    <input className={stile.button} type="reset" value="Очистити форму" />
                </div>
            </div>
        </form>
    );
}
