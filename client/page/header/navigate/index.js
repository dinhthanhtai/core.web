import React from 'react';

import './styles.scss';

const Navigate = () => {

  const listTitle = ['Explore', 'Products', 'About Us', 'Contact Us'];

  return (
    <ul className='navigate__menu'>
        {
          listTitle.map((title, index) => (
            <li key={index} className='navigate__menu--item'> {title} </li>
          ))
        }
    </ul>
  )
}

export default Navigate;
