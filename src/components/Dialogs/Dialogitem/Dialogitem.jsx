import { NavLink } from 'react-router-dom';
import Avatar from '../../Content/Profile/Avatar/Avatar';
import stl from './Dialogitem.module.css';


const Dialogitem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={stl.item} >
            <div className ={stl.avatar}>
                <Avatar />
            </div>
            <div className ={stl.text}>
                <NavLink className={stl.contlinc} activeClassName={stl.active} to={path} > {props.name}</NavLink>
            </div>
        </div>
    )
};

export default Dialogitem;