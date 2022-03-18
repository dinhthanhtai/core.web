import React from 'react';

import './styles.scss';

const Heading = (props) => {
  const { children, type = 'h2', } = props;

  let headingType;

  switch(type) {
    case 'h1': 
      headingType = <h1> {children} </h1>; 
      break;
    case 'h2': 
      headingType = <h2> {children} </h2>; 
      break;
    case 
      'h3': 
      headingType = <h3> {children} </h3>; 
      break;
    case 'h4': 
      headingType = <h4> {children} </h4>; 
      break;
  }

  return (
    <div className='headingContainer'> 
      {headingType}
    </div>
  )
}

export default Heading