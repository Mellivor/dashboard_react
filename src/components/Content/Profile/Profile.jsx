import React from "react";
import { useAuthContext } from "../../../hook/useAuthContext";
import style from "./Profile.module.css"
import { useLogout } from "../../../hook/useLogout";
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const nav = useNavigate()
    const { logout } = useLogout()
    const { user, dispatch } = useAuthContext()

    return (
        <div className={style.profile_container}>
            <h1>
                {user.name}
            </h1>
            <button onClick={() => {
                logout()
                nav("/")
            }}>Вийти</button>
        </div>
    )
}

export default Profile;
