import React from 'react';
import classNames from 'classnames';

import './styles.scss';

const Button = (props) => {
  const { 
    children, type, onClick, className, 
    icon, fontWeight, backgroundColor, color } = props;
  
  const btn = classNames(
    'button',
    type,
    className, 
    {'icon': icon},
    {'backgroundColor': backgroundColor},
    {'fontWeight': fontWeight},
    {'color': color}
  )

  return (
    <div className='containerButton'>
      <button className={btn} onClick={onClick} >
        {icon}
        {children}
      </button>
    </div>
  )
}

export default Button;