import React, { useState } from 'react';
import { FaShareAltSquare, FaEllipsisV } from 'react-icons/fa';

import './styles.scss';

export const Information = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div className='info'>
      <div className='info_left'>
        <img className='info_left-avatar' alt='loading....' />
        <div className='info_left-text'> Individual </div>
        <div className='info_left-name'> Tim Kennedy </div>
        <div className='info_left-prize'> 
          For <span> Big Freeze 6 </span> by <span> FightMND </span> 
        </div>
        <div className='info_left-button'>
          <button className='info_left-button-donate'> donate to individual </button>
          <button className='info_left-button-share'> 
            <FaShareAltSquare />
          </button>
          <button onClick={() => setVisible(!visible)} className='info_left-button-option'> 
            <FaEllipsisV />
          </button>
        </div>
        {
          visible && (
            <ul className='info_left-popup'>
              <li className='info_left-popup-button'> Edit </li>
              <li className='info_left-popup-button'> Deactivate </li>
            </ul>  
          )
        }
      </div>
      <div className='info_right'>
        <div className='info_right-score'>
          <div className='info_right-score-up'>
            <div className='info_right-score-up-left'>
              Total Raised 
              <div className='info_right-score-up-left-price'> $2.382.60 </div>
            </div>
            <div className='info_right-score-up-right'>
              My goal
              <div className='info_right-score-up-right-price'> $2.382.60 </div>
            </div>
          </div>
          <div className='info_right-score-bottom'></div>
        </div>
        <img alt='loading....' src='' />
      </div>
    </div>
  )
}
