import stile from './PostForm.module.css';
import { useRef } from 'react';



export default function PostsForm(props) {
    function handleClick(e) {
        e.preventDefault()
        props.sendPost(inputRef.current.value, props.fetchInfo)
        inputRef.current.value = ""
    }

    const inputRef = useRef(null);

    return (
        <form className={stile.form}>
            <textarea autoComplete="off" required={true} className={stile.input} ref={inputRef} />
            <div>
                <input onClick={handleClick} type="submit" value="Створити пост" />
                <input type="reset" value="Очистити форму" />
            </div>
        </form>
    );
}
