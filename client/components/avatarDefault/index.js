import classNames from 'classnames';
import React from 'react';

const Avatar = (props) => {
  const {src, className, alt} = props;

  const avt = classNames(
    className
  )

  return (
    <img className={avt} src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt='Pending logo ...' />
  )
}

export default Avatar