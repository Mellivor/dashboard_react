import stile from './News.module.css';
import { useState, useEffect } from "react";
import axios from 'axios';

const News = () => {

    const url = "https://expressmongo.netlify.app/api/posts/";
    const [getNews, setNews] = useState(null)

    const fetchInfo = async () => {
        try {
            const respons = await axios.get(url
                // {
                // headers: {
                //     "Access- Control - Allow - Origin": "*",
                //     // 'Content-Type': 'application/x-www-form-urlencoded',
                // }
                // }
            )
            console.log(respons.data);
            setNews(respons.data)
        } catch (error) {
            console.log(error.mesage);
        }
    }

    useEffect(() => {
        fetchInfo();
    }, []);

    return (
        <div className={stile.news}>
            Some new messages
            {/* {getNews && console.log(getNews[0].body)} */}
            {getNews && getNews.map((i) => {
                return <div key={i._id}> {i.author}<br></br> {i.body} </div>
            })}
            {/* {console.log(getNews[0].body)} */}
        </div>
    );
}

export default News;
