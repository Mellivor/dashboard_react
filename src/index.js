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
import Index from "./routes/index";



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
                        path: "profile",
                        element: <News />,
                    },
                    {
                        path: "login",
                        element: <News />,
                    },
                ]
            }
        ],
    },

]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
