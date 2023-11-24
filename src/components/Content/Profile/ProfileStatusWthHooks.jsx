import { useState } from "react";



const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);
    const activateEditMode = () => {
        setEditMode(true)
    }

    const deActivateEditMode = () => {
        props.setProfileStatus(status)
        setEditMode(false)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    // componentDidUpdate(prevProps, prevState){
    //     if (prevProps.status !== this.props.status) {
    //             this.setState({
    //                     status: this.props.status
    //             });
    //         }

    //     }


        if (!editMode) {
           return (<div >
               <span onDoubleClick ={activateEditMode}>{props.status || 'Add your status'}</span>
           </div>)

        } else {
            return (
           <div >
                    <input autoFocus={true}
                        onChange={onStatusChange}
                        onBlur={deActivateEditMode}
                        value={status} type='text' />
           </div>
            )
       }

}

export default ProfileStatusWithHooks;
