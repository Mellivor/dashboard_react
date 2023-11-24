import React from "react";
import ProfileYou from "./ProfileYou";
import { withRouter } from "react-router";
import { compose } from "redux";
import { connect } from "react-redux";
import { setUserProfile, profileRequest, getProfileStatus,setProfileStatus } from "../../../redux/profilePage_reducer";
import { logout } from '../../../redux/athor_reducer';

class ProfileContainerClass extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) userId = '00002';
        this.props.profileRequest(userId);
        this.props.getProfileStatus(userId);
    }



    render() {
        return <ProfileYou {...this.props}/>
    }
}

const mapStateToUserProps = (state) => {
    return {
        profilePage: state.profilePage.userok,
        status: state.profilePage.status
    }
};

const ProfileContainer = compose(
    connect(mapStateToUserProps, { setUserProfile, profileRequest, getProfileStatus,setProfileStatus, logout, }),
    withRouter
)(ProfileContainerClass);

export default ProfileContainer;
