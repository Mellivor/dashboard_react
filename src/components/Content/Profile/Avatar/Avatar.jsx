import stl from './Avatar.module.css';
const Avatar = (props) => {
    return (
        props.src ===null || props.src ===undefined ? < img className={stl.avatar} src="https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg" alt="Profile icon" /> :
        // props.src ===undefined & props.src ===null ? < img className={stl.avatar} src="https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg" alt="Profile icon" /> :
            <img className={stl.avatar} src={props.src} alt="Profile icon" />

      );
}

export default Avatar;
