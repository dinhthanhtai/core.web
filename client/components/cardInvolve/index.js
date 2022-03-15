import React from 'react';
import Avatar from '../avatarDefault';

import './styles.scss';

const CardInvolve = (props) => {
  const { type, name, amount, detail } = props; 

  return (
    <div className='cardInvolve'>
        <Avatar className='cardInvolve__image' />
        <h4 className='cardInvolve__kind'> {type} </h4>
        <h3 className='cardInvolve__name'> {name} </h3>
        <h3 className='cardInvolve__amount'> {'$' + amount} </h3>
        <p className='cardInvolve__detail'>
          {detail}
        </p>
      </div>
  )
}

export default CardInvolve