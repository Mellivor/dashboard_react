import { connect } from "react-redux";
import { actionCreaterAddPost } from "../../../redux/profilePage_reducer";
import Posts from "./Posts";

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (post) => {
            dispatch(actionCreaterAddPost(post));
        }

    }
};
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default MyPostsContainer;
