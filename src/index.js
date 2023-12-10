import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"
import Root from "./routes/root";
import ErrorPage from "./error-page";
import News from "./components/News/News";
import Login from './components/Content/login/login';
import Index from "./routes/index";
import Profile from './components/Content/Profile/Profile';

import { PostsContextProvider } from './Context/PostsContext';
import { AuthContextProvider } from './Context/AuthContext';

const signupUrl = "https://expressmongo.netlify.app/api/user/signup"
const loginUrl = "https://expressmongo.netlify.app/api/user/login"


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                errorElement: <ErrorPage />,
                children: [
                    { index: true, element: <Index /> },
                    {
                        path: "news",
                        element: <News />,
                    },
                    {
                        path: "advertisement",
                        element: <News />,
                    },
                    {
                        path: "login",
                        element: <Login method="Вхід" url={loginUrl} action="LOGIN" />,
                    },
                    {
                        path: "signin",
                        element: <Login method="Реєстрація" url={signupUrl} action="SIGNIN" />,
                    },
                    {
                        path: "profile",
                        element: <Profile />,
                    },
                ]
            }
        ],
    },

]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AuthContextProvider>
            <PostsContextProvider>
                <RouterProvider router={router} />
            </PostsContextProvider>
        </AuthContextProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
