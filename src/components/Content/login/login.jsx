import React from 'react';
import { loginFormik } from '../../../redux/athor_reducer';
import Logform from './logform';
import { connect } from "react-redux";

const Login = (props) => {
    return (
        <div>
            <h2>Login</h2>
            <Logform login={props.loginFormik}/>
        </div>

    )
}

export default Login;

export const LoginContainer = connect(null, { loginFormik })(Login);
