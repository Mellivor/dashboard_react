import Preloader from '../Comon/Preloader/preloader';
import Profile from './Profile';

const ProfileYou = (props) => {
    return (
        !props.profilePage ? <Preloader /> : (
            <Profile
                logout = {props.logout}
                setProfileStatus = {props.setProfileStatus}
                status = {props.status}
                src={props.profilePage.photos.large}
                id={props.profilePage.userId}
                key={props.profilePage.userId}
                name={props.profilePage.fullName}
                aboutMe={props.profilePage.aboutMe}
                contacts={props.profilePage.contacts}
            />)

);
}

export default ProfileYou;
