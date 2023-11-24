import Dialogitem from './Dialogitem/Dialogitem';
import Message from './Message/Message';
import stl from './Dialogs.module.css';
import { useFormik } from "formik";

const Dialogs = (props) => {
    let messageElement = props.state.messages.map (m => <Message message={m.messages} key = {m.id} who ={m.who} />)
    let dialogsElement = props.state.dialogs.map(d => <Dialogitem name={d.name} key = {d.id} id={d.id} />)
    let friendElement = props.state.friends.map(f => <Dialogitem name={f.name}  key = {f.id} id={f.id} />)

    const dialogsform = useFormik({
      initialValues: {
            message: "",
      },
    onSubmit: values => {
        props.actionCreateraddMessage(values.message);
        dialogsform.resetForm();
    }
  });

    return (
        <div className={stl.dialogs}>
            <div className={stl.items}>
                <div className={stl.friends}>
                    <h2>Friends</h2>
                    {friendElement}
                </div>
                <h2>Dialogs</h2>
                {dialogsElement}
            </div>
            <div className={stl.separator}></div>
            <div className={stl.messages}>
                {messageElement}
                <form onSubmit={dialogsform.handleSubmit}>
                    <textarea
                        className={stl.textarea}
                        id="message"
                        name="message"
                        type="message"
                        onChange={dialogsform.handleChange}
                        value={dialogsform.values.message} />

                <div className={stl.button}>
                <button type="submit" >Send</button>
                </div>
                </form>
                </div>
        </div>
    )
};
export default Dialogs;
