import stile from './News.module.css';
import { useState, useEffect } from "react";
import axios from 'axios';
import Post from "./Post";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faRetweet } from '@fortawesome/free-solid-svg-icons'
import PostsForm from './PostForm';



const News = () => {

    // const url = "https://expressmongo.netlify.app/api/posts/";
    const url = "http://localhost:52488/api/posts";
    const [getNews, setNews] = useState(null)
    const [showNewsPost, fetchNewPost] = useState(false)

    const fetchInfo = async () => {
        try {
            const respons = await axios.get(url)
            console.log(respons.data);
            setNews(respons.data)
        } catch (error) {
            console.log(error.mesage);
        }
    }

    const sendPost = async (post, fetchInfo) => {
        try {
            await axios.post(url, { body: post })
            await fetchInfo()
        } catch (error) {
            console.log(error.mesage);
        }
    }

    useEffect(() => {
        fetchInfo();
    }, []);

    return (
        <div className={stile.news}>
            {showNewsPost && <PostsForm fetchInfo={fetchInfo} sendPost={sendPost}  ></PostsForm>}
            {getNews && getNews.map((i, ind) => {
                return <Post key={i._id} url={url} body={i.body} author={i.author} your={true} ind={ind} _id={i._id} userid={i.userid} className="sdfsdf"></Post>
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
