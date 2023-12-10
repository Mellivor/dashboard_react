import stile from './News.module.css';
import { useState, useEffect } from "react";
import axios from 'axios';
import Post from "./Post";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faRetweet } from '@fortawesome/free-solid-svg-icons'
import PostsForm from './PostForm';
import { usePostsContext } from "./../../hook/usePostsContext";


const News = () => {

    const url = "https://expressmongo.netlify.app/api/posts/";
    // const url = "http://localhost:52488/api/posts";
    const { posts, dispatch } = usePostsContext()
    // const [getNews, setNews] = useState(null)
    const [showNewsPost, fetchNewPost] = useState(false)

    const fetchInfo = async () => {
        try {
            const respons = await axios.get(url)
            console.log(respons.data);
            dispatch({ type: 'SET_POSTS', payload: respons.data })
            // setNews(respons.data)
        } catch (error) {
            console.log(error.mesage);
        }
    }

    const sendPost = async (post, fetchInfo) => {
        try {
            const newPost = await axios.post(url, { body: post })
            // await fetchInfo()
            console.log(newPost);
            dispatch({ type: 'CREATE_POST', payload: newPost.data })
        } catch (error) {
            console.log(error.mesage);
        }
    }

    useEffect(() => {
        if (!posts) {
            fetchInfo();
        }
    }, []);

    return (
        <div className={stile.news}>
            {showNewsPost && <PostsForm fetchInfo={fetchInfo} sendPost={sendPost}  ></PostsForm>}
            {posts && posts.map((i, ind) => {
                return <Post key={i._id}
                    url={url}
                    body={i.body}
                    author={i.author}
                    your={true}
                    ind={ind}
                    _id={i._id}
                    userid={i.userid}></Post>
            })}

            <div className={stile.controlpanel}>
                <button onClick={() => {
                    fetchNewPost(!showNewsPost)
                    console.log(showNewsPost)
                }} className={stile.control_buttons}>
                    Додати пост <FontAwesomeIcon icon={faPlus} />
                </button>
                <button onClick={fetchInfo} className={stile.control_buttons}>Оновити сторінку <FontAwesomeIcon icon={faRetweet} /></button>
            </div>
        </div>
    );
}

export default News;
