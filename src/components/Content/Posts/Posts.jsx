import Newpost from './Newpost';
import stl from './Posts.module.css';
import { useFormik } from "formik";

const Posts = (props) => {

    const postform = useFormik({
      initialValues: {
            postin: "",
      },
    onSubmit: values => {
        props.addPost(values.postin);
        console.log(values.postin);
        postform.resetForm();
    }
  });

    let postElem = props.posts.posts.map(m => <Newpost message={m.post} key={m.id} likes={m.likes} />)

  return (
    <div className={stl.posts_wrapper}>
        <h2 className={stl.posts_wrapper_myposts}>My posts</h2>
        <form onSubmit={postform.handleSubmit}>
                <label htmlFor="postin">Email Address</label>
                <textarea
                    className={stl.posts_wrapper_textarea}
                    id="postin"
                    name="postin"
                    type="postin" onChange={postform.handleChange}
                    value={postform.values.postin} />

        <div className={stl.posts_wrapper_button}>
            <button type="submit">Send</button>
        </div>
        </form>
        {postElem}
    </div>
);
}

export default Posts;
