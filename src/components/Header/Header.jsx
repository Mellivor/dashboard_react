import { NavLink } from 'react-router-dom';
import stl from './Header.module.css';
import Logo from './Logo/Logo';

const Header = (props) => {
    return (
        <header className={stl.header}>
            <nav className={stl.nav}>
                <NavLink to="/"><Logo /></NavLink>
                <NavLink className={({ isActive, isPending }) =>
                    isPending ? stl.linnks : isActive ? `${stl.active} ${stl.linnks}` : stl.linnks
                } to="/news"><div >Новини.</div></NavLink>
                <NavLink className={({ isActive, isPending }) =>
                    isPending ? stl.linnks : isActive ? `${stl.active} ${stl.linnks}` : stl.linnks
                } to="/advertisement"><div >Оголошення.</div></NavLink>
                {props.authorized ?
                    <NavLink className={({ isActive, isPending }) =>
                        isPending ? stl.linnks : isActive ? `${stl.active} ${stl.linnks}` : stl.linnks
                    } to={`/profile/${props.id}`}><div >{props.login}.</div></NavLink> :
                    <NavLink className={({ isActive, isPending }) =>
                        isPending ? stl.linnks : isActive ? `${stl.active} ${stl.linnks}` : stl.linnks
                    } to="/login"><div >Увійти.</div></NavLink>
                }
            </nav>

        </header>
    );
}

export default Header;
