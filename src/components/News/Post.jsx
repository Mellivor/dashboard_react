import stile from './Post.module.css';
import axios from 'axios';



export default function Posts(props) {

    const delatePost = async () => {
        console.log(props._id);
        console.log(props.userid);
        console.log(props.url);
        try {
            const respons = await axios.delete(props.url,

                {
                    data: {
                        userid: props.userid,
                        postid: props._id
                    }
                }

            )
            console.log(respons.data.deletedCount);
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className={props.ind % 2 ? `${stile.post} ${stile.even}` : `${stile.post} ${stile.odd}`} id={props._id} data-author={props.author} >
            {/* <div className={props.ind % 2 ? `post to` : `post ${stile.odd}`} > */}
            <p>{props.body}</p>
            <p className={stile.auth}>{props.author}</p>
            <div>
                <button>Коментарі</button>
                {props.your && <button onClick={delatePost}>Видалити</button>}
            </div>
            {props.comments && props.comments.map((i, ind) => {
                <div key={i.id} className={ind % 2 && "iven"}>
                    <p>{i.author}</p>
                    <p>{i.userid}</p>
                    <p>{i.likes}</p>
                    <p>{i.body}</p>
                    {i.body}
                </div>
            })}
        </div>
    );
}
