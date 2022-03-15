import React from 'react';

import './styles.scss';

const AmountCard = (props) => {
  const { children } = props;
  return (
    <div className='amountCard'>
      {children}
    </div>
  )
}

export default AmountCard;