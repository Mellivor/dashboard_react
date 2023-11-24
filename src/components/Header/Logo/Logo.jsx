import stl from './Logo.module.css';
import logo from '../../../engineering1.png';

const Logo = () => {
  return (

      <img className={stl.logo} src={logo} alt = 'logo'></img>

);
}

export default Logo;
