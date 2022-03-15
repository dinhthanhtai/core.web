import classNames from 'classnames';
import React from 'react';

import './styles.scss';

const Input = (props) => {
  const { defaultValue, type, value, className } = props;

  const input = classNames(
    className
  )

  return (
    <input className={input} type={type} value={value} defaultValue={defaultValue} />
  )
}

export default Input;