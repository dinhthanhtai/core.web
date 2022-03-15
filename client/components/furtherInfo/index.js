import React from 'react';
import Heading from '../heading';

import './styles.scss';

export const FurInfo = () => {
  return (
    <div className='furInfo'>
      <Heading type='h2'> Further information </Heading>
      <div className='furInfo__card'>
        <img 
          className='furInfo__card--image' 
          src='https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/8/2019/10/Promote-charity-event.png' 
          alt='loading....'  
        />
        <div className='furInfo__card--content'>
          <h3 className='furInfo__card--content--title'>
            FightMND
          </h3>
          <p className='furInfo__card--content--des'>
            Established with the purpose of finding effective treatments and ultimately a cure for Motor Neurone Disease 
          </p>
          <p className='furInfo__card--content--more'>Learn more </p>
        </div>
      </div>
    </div>
  )
}
