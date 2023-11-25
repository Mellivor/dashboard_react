import stile from './PostForm.module.css';
import { useRef } from 'react';



export default function PostsForm(props) {
    function handleClick(e) {
        e.preventDefault()

        if (!inputRef.current.value) {
            return
        }

        props.sendPost(inputRef.current.value, props.fetchInfo)
        console.log(inputRef.current.value);
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
