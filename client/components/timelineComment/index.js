import React from 'react';
import Heading from '../heading';

import './styles.scss';

const TimeLineComment = (props) => {
  const { title, content } = props;

  if(!title && !content) return <></>; 

  return (
    <div className='timeline'>
      <div className="timeline">
        <div className="container right">
          <div className="content">
            <Heading type='h2'> {title} </Heading>
            <p> {content} </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TimeLineComment