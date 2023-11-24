import React from "react";



class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })

    }
    deActivateEditMode = () => {

        this.props.setProfileStatus(this.state.status)
        this.setState({
            editMode: false,

        })
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })

    }
    componentDidUpdate(prevProps, prevState){
        if (prevProps.status !== this.props.status) {
                this.setState({
                        status: this.props.status
                });
            }

        }

    render(){
        if (!this.state.editMode) {
           return (<div >
               <span onDoubleClick ={ this.activateEditMode}>{this.props.status || 'Add your status'}</span>
           </div>)

        } else {
            return (
           <div >
                    <input autoFocus={true} onChange={this.onStatusChange } onBlur ={this.deActivateEditMode} value={this.state.status} type='text' />
           </div>
            )
       }
    }
}

export default ProfileStatus;
