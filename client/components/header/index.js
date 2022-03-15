import React from 'react';
import { FaAngleDown } from 'react-icons/fa';
import Avatar from '../avatarDefault';

import './styles.scss';

export const Header = () => {

  const listTitle = ['Explore', 'Products', 'About Us', 'Contact Us'];

  return (
    <header className='header'>
      <div className='header__logo'>
        <Avatar />
      </div>
      <ul className='header__menu'>
        {
          listTitle.map((title, index) => (
            <li key={index} className='header__menu--item'> {title} </li>
          ))
        }
      </ul>
      <div className='header__info'>
        <Avatar className='header__info--image' />
        <span> Christine <FaAngleDown className='header__info--icon' /> </span>
      </div>
    </header>
  )
}
