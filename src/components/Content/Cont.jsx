import stl from './Cont.module.css';
import Gearlogo from './Gearlogo/Gearlogo';
import MyPostsContainer from './Posts/MyPostsContainer';
import ProfileContainer from './Profile/ProfileContainerClass';

const Cont = (props) => {
  return (
    <div className={stl.cont}>
      <Gearlogo/>
      <ProfileContainer/>
      <MyPostsContainer />
  </div>
);
}

export default Cont;
