import React from 'react';
import Information from './information';
import Navigate from './navigate';

import './styles.scss';

const Header = () => {
  return (
    <header className='header'>
      <Information />
      <Navigate />
    </header>
  )
}

export default Header;