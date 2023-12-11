import stile from './Post.module.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'
import { useAuthContext } from '../../hook/useAuthContext';

export default function Posts(props) {

    const { user, dispatch } = useAuthContext()


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
            <div className={stile.post_top}>
                <pre className={stile.post_body}>{props.body}</pre>
                {(user._id === props.userid) && <button className={stile.post_buttons} onClick={delatePost}>Видалити <FontAwesomeIcon icon={faTrashCan} /></button>}
            </div>
            <div className={stile.post_bottom}>
                <button className={stile.post_buttons} >Коментарі <FontAwesomeIcon icon={faCommentDots} /></button>
                <p className={stile.auth}>{props.author}</p>
            </div>
            {props.comments && props.comments.map((i, ind) => {
                return <div key={i.id} className={ind % 2 && "iven"}>
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
