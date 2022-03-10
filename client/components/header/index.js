import React from 'react';
import { FaAngleDown } from 'react-icons/fa';

import './styles.scss';

export const Header = () => {
  return (
    <header className='header'>
      <div className='header_logo'> logo </div>
      <ul className='header_menu'>
        <li className='header_menu_item'> Explore </li>
        <li className='header_menu_item'> Products </li>
        <li className='header_menu_item'> About Us </li>
        <li className='header_menu_item'> Contact Us </li>
      </ul>
      <div className='header_info'>
        <img src='#' className='header_info-name' />
        <span> Christine <FaAngleDown className='header_info-icon' /> </span>
      </div>
    </header>
  )
}
