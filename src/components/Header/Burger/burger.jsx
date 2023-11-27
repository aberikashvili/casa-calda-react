import React from 'react';
import Burger from '../../../Imgs/Frame.png';
import X from '../../../Imgs/FrameX.png'
import Menu from './Menu/Menu';
import './burger.scss';

export default function BurgerMenu({ menuOpen }) {
  return (
    <div className="Burger-menu">
      <button className="Burger-button">
       {menuOpen ? <img src={X} alt="Burger-X-icon" className='X-icon'/> : <img src={Burger} alt="Burger-icon" className='Burger' />}
      </button>
      {menuOpen && (
        <Menu />
      )}
    </div>
  );
}
