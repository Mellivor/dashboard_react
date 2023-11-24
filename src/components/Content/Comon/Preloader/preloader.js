import React from 'react';
import stl from './Preloader.module.css';

let Preloader =(props) => {
   return <div className={stl.loadBlock} > <img src='Gear-1.1s-230px.svg' alt = 'loading icon' /></div >
}

export default Preloader;
