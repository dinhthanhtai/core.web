import React from 'react';
import Header from './header';
import { hot } from 'react-hot-loader';
import './styles.scss';


const Page = () => {
  return (
    <div className='root'> 
      <Header />
    </div>
  )
}

export default hot(module)(Page)