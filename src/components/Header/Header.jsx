import { NavLink } from 'react-router-dom';
import stl from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserShield } from '@fortawesome/free-solid-svg-icons'
import { useAuthContext } from '../../hook/useAuthContext';


const Header = (props) => {
    const { user, dispatch } = useAuthContext()

    return (
        <header className={stl.header}>
            <nav className={stl.nav}>
                <NavLink className={({ isActive, isPending }) =>
                    isPending ? stl.linnks : isActive ? `${stl.active} ${stl.linnks}` : stl.linnks
                } to="/"><FontAwesomeIcon icon={faUserShield} /></NavLink>
                <NavLink className={({ isActive, isPending }) =>
                    isPending ? stl.linnks : isActive ? `${stl.active} ${stl.linnks}` : stl.linnks
                } to="/news"><div >Новини.</div></NavLink>
                <NavLink className={({ isActive, isPending }) =>
                    isPending ? stl.linnks : isActive ? `${stl.active} ${stl.linnks}` : stl.linnks
                } to="/advertisement"><div >Оголошення.</div></NavLink>
                {user ?
                    <NavLink className={({ isActive, isPending }) =>
                        isPending ? stl.linnks : isActive ? `${stl.active} ${stl.linnks}` : stl.linnks
                    } to={`/profile`}><div >{user.name}.</div></NavLink> :
                    <>
                        <NavLink className={({ isActive, isPending }) =>
                            isPending ? stl.linnks : isActive ? `${stl.active} ${stl.linnks}` : stl.linnks
                        } to="/login"><div >Увійти.</div>
                        </NavLink>
                        <NavLink className={({ isActive, isPending }) =>
                            isPending ? stl.linnks : isActive ? `${stl.active} ${stl.linnks}` : stl.linnks
                        } to="/signin"><div >Зареєструватись.</div></NavLink></>
                }
            </nav>

        </header>
    );
}

export default Header;
