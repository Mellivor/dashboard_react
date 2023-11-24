import { connect } from "react-redux";
import { compose } from "redux";
import {
    follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount,
    nextPagesList, previousPagesList, setloading, setloaded,
    updateStatusAC, toggleIsFolowingAC, requesTusers,
} from "../../../redux/usersPage_reducer";
import { getChangingStatus, getCurrentPage, getLoaded, getLoadedButtons, getPageList, getPageSize, getTotalUsers, getUsers } from "../../../redux/users_selectors";
import UsersC from "./UsersС";


// const mapStateToProps = (state) => {
//     return {
//         usersList: state.usersList.usersList,
//         pageSize: state.usersList.pageSize,
//         totalUsers: state.usersList.totalUsers,
//         currentPage: state.usersList.currentPage,
//         pageList: state.usersList.pageList,
//         loaded: state.usersList.loaded,
//         changingStatus: state.usersList.changingStatus,
//         loadedButtons: state.usersList.loadedButtons,
//     }
// };
const mapStateToProps = (state) => {
    return {
        usersList: getUsers(state),
        pageSize: getPageSize(state),
        totalUsers: getTotalUsers(state),
        currentPage: getCurrentPage(state),
        pageList: getPageList(state),
        loaded: getLoaded(state),
        changingStatus: getChangingStatus(state),
        loadedButtons: getLoadedButtons(state),
    }
};


const UsersContainer = compose(
    connect(mapStateToProps, {
    follow, unFollow, setUsers, setCurrentPage,setTotalUsersCount, nextPagesList,
    previousPagesList, setloading, setloaded, updateStatusAC, toggleIsFolowingAC, requesTusers}),

)(UsersC);

export default UsersContainer;
