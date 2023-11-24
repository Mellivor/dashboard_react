import React from "react";
import Header from "./Header";
import { setloading, authorizedProfile, setUserProfile} from "../../redux/athor_reducer";
import { connect } from "react-redux";



class ClassHeaderContainer extends React.Component{

    componentDidMount() {
    };

    render() {
       return <Header {...this.props} />
    };
}

const mapStateToUserProps = (state) => {
    return {
    id:state.auth.id,
    login:state.auth.login,
    authorized:state.auth.authorized,
    }
};

export default connect(mapStateToUserProps,{setloading, authorizedProfile, setUserProfile})(ClassHeaderContainer);
