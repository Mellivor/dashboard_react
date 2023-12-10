import React, { useState } from 'react';
import style from './Logform.module.css';
import { useRef } from 'react';
import axios from 'axios';
import { useAuthContext } from '../../../hook/useAuthContext';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    const nav = useNavigate();
    const { dispatch } = useAuthContext()
    const [isname, setNameError] = useState(null)
    const [ispassword, setPasswordError] = useState(null)

    const nameRef = useRef(null);
    const passwordRef = useRef(null);

    const onSubmitt = async (e) => {
        e.preventDefault()

        if (!nameRef.current.value) {
            setNameError("Ім'я обовязкове")
            return
        }
        if (!passwordRef.current.value) {
            setPasswordError("Пароль обовязковий")
            return
        }

        try {
            const respons = await axios.post(props.url,

                {

                    name: nameRef.current.value,
                    password: passwordRef.current.value

                }

            )

            setNameError(null)
            setPasswordError(null)
            nameRef.current.value = ""
            passwordRef.current.value = ""


            localStorage.setItem("user", JSON.stringify(respons.data))
            dispatch({ type: props.action, payload: respons.data })
            nav('/')
        } catch (error) {
            alert(error);
        }



    };

    return (
        <div className={style.form_content}>
            <h2>{props.method}</h2>
            <form onSubmit={onSubmitt}>
                <div>
                    <input
                        className={isname && style.error}
                        id="name"
                        name="name"
                        type="name"
                        ref={nameRef}
                    />
                    <label htmlFor="name">І'мя коримстувача</label>
                    {isname && <div>{isname}</div>}
                </div>
                <div>
                    <input
                        className={ispassword && style.error}
                        id="password"
                        name="password"
                        type="password"
                        ref={passwordRef}
                    />
                    {ispassword && <div>{ispassword}</div>}
                    <label htmlFor="password">Пароль</label>
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>

    )
}

export default Login;
