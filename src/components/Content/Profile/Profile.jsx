import Avatar from './Avatar/Avatar';
import stl from './Profile.module.css';
import ProfileStatusWithHooks from './ProfileStatusWthHooks';


const Profile = (props) => {
  return (
    <div className={stl.profile}>
      <Avatar src={props.src} />
          <div className={stl.text}>
              <ProfileStatusWithHooks status={props.status} setProfileStatus={ props.setProfileStatus }/>
        <h2 className={stl.name}>
          {props.name}
        </h2>
            {!props.aboutMe ?undefined:<div>About me:   {props.aboutMe}</div>}
            {!props.contacts.facebook ?undefined:<div>facebook:   {props.contacts.facebook}</div>}
            {!props.contacts.website ?undefined:<div>website:   {props.contacts.website}</div>}
            {!props.contacts.vk ?undefined:<div>vk:   {props.contacts.vk}</div>}
            {!props.contacts.twitter ?undefined:<div>twitter:   {props.contacts.twitter}</div>}
            {!props.contacts.instagram ?undefined:<div>instagram:   {props.contacts.instagram}</div>}
          </div>
          <button onClick = {props.logout}>Logout</button>
    </div>
);
}

export default Profile;
