import { useRouteError, NavLink } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>Ой!</h1>
            <p>Щось пішло не так.</p>
            <p>Виникла наступна помилка:</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <NavLink to="/">На головну</NavLink>
        </div>
    );
}
