import React from 'react';
import { MessageBoard } from './messageBoard';

import './styles.scss';

export const LeftContent = () => {
  return (
    <div className='leftContent'>
      <h2 className='leftContent__title'> About </h2>
      <p className='leftContent__des'> 
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, \
        when an unknown printer took a galley of type and scrambled it to make a type specimen book 
      </p>
      <h2 className='leftContent__subTitle'> How I'm getting involved </h2>
      <div className='leftContent__cards'> 
        <div className='leftContent__cards-card'>
          <img src='' alt='loading...'/>
          <h4 className='leftContent__cards-card-kind'> Team </h4>
          <h3 className='leftContent__cards-card-name'> Team design </h3>
          <h3 className='leftContent__cards-card-amount'> $10.927.70 </h3>
          <p className='leftContent__cards-card-detail'>
            Created on 02 July 2021 <br /> Created by Username
          </p>
        </div>
        <div className='leftContent__cards-card'>
          <img src='' alt='loading...'/>
          <h4 className='leftContent__cards-card-kind'> Team </h4>
          <h3 className='leftContent__cards-card-name'> Team design </h3>
          <h3 className='leftContent__cards-card-amount'> $10.927.70 </h3>
          <p className='leftContent__cards-card-detail'>
            Created on 02 July 2021 <br /> Created by Username
          </p>
        </div>
      </div>
      <MessageBoard />
    </div>
  )
}
