import Avatar from '../../Content/Profile/Avatar/Avatar';
import './Message.css';

const Message = (props) => {

    return (
    <div className={props.who}>
            <div className = 'avatar' >
                <Avatar />
            </div >
            <div className='message_text'>
                {props.message}
            </div>

    </div>
    )
};

export default Message;
