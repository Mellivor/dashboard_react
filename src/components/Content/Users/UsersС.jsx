import React from 'react';
import Users from './Users';

class UsersC extends React.Component {

    componentDidMount() {
        this.props.requesTusers(this.props.currentPage, this.props.pageSize);
        }

    onPageChanged = (p) => {
        this.props.setCurrentPage(p);
        this.props.requesTusers(p, this.props.pageSize);
    }
    render() {
        return (
            <Users
                loaded = {this.props.loaded}
                totalUsers={this.props.totalUsers}
                usersList={this.props.usersList}
                follow={this.props.follow}
                unFollow={this.props.unFollow}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                pageSize={this.props.pageSize}
                nextPagesList={this.props.nextPagesList}
                previousPagesList={this.props.previousPagesList}
                pageList={this.props.pageList}
                changingStatus={this.props.changingStatus}
                loadedButtons={this.props.loadedButtons}
                toggleIsFolowingAC={this.props.toggleIsFolowingAC}
            />)
}
}

export default UsersC;
