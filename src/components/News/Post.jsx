import stile from './Post.module.css';



export default function Posts(props) {
    return (
        <div className={props.ind % 2 ? `${stile.post} ${stile.even}` : `${stile.post} ${stile.odd}`} >
            {/* <div className={props.ind % 2 ? `post to` : `post ${stile.odd}`} > */}
            <p>{props.body}</p>
            <p className={stile.auth}>{props.author}</p>
            <div>
                <button>Коментарі</button>
                {props.your && <button>Видалити</button>}
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
