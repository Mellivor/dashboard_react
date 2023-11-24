import React from "react";
import { useFormik } from "formik";
// import stl from './Logform.module.css';


const Logform = (props) => {
  const loginform = useFormik({
      initialValues: {
            email: "",
            password: "",
      },
    onSubmit: values => {
        props.login(values.email, values.password, false);
        loginform.resetForm();
    }
  });
  return (
    <form onSubmit={loginform.handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={loginform.handleChange}
        value={loginform.values.email}
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={loginform.handleChange}
        value={loginform.values.password}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Logform;
