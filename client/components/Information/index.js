import React, { useState } from 'react';
import { FaShareAlt, FaEllipsisV } from 'react-icons/fa';
import Avatar from '../avatarDefault';
import Button from '../button';

import './styles.scss';

export const Information = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className='info'>
      <section className='info__left'>
        <Avatar className='info__left--avatar' />
        <div className='info__left--text'> Individual </div>
        <div className='info__left--name'> Tim Kennedy </div>
        <div className='info__left--prize'> 
          For <span> Big Freeze 6 </span> by <span> FightMND </span> 
        </div>
        <div className='info__left--button'>
          <Button type='md' backgroundColor> donate to individual </Button>
          <Button 
            type='sm' 
            icon={<FaShareAlt />}
          />
          <Button 
            onClick={() => setVisible(!visible)} 
            type='sm' 
            icon={<FaEllipsisV />}
          >
            {
              visible && (
                <ul className='info__left--popup'>
                  <li className='info__left--popup--button'> Edit </li>
                  <li className='info__left--popup--button'> Deactivate </li>
                </ul>  
              )
            }
          </Button>
        </div>
      </section>
      <section className='info__right'>
        <div className='info__right--score'>
          <div className='info__right--score--up'>
            <div className='info__right--score--up--left info__right--score--up--text'>
              Total Raised 
              <div className='info__right--score--up--left--price'> $2.382.60 </div>
            </div>
            <div className='info__right--score--up--right info__right--score--up--text'>
              My goal
              <div className='info__right--score--up--right--price'> $5,000 </div>
            </div>
          </div>
          <div className='info__right--score--bottom'></div>
        </div>
        <img alt='loading....' src='https://s1.favim.com/orig/151204/art-colors-draw-drawing-Favim.com-3700531.jpg' />
      </section>
    </div>
  )
}
