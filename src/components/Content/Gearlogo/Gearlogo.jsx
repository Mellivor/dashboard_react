import stl from './Gearlogo.module.css';

const Gearlogo = (props) => {
  return (
    <div className={stl.gears}>
      <img className={stl.gearsimag} src='https://evolution.skf.com/wp-content/uploads/sites/5/2020/08/gears-top-image.jpg' alt='gears'></img>
    </div>
  )
}

export default Gearlogo;