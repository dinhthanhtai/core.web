import React from 'react';
import { MessageBoard } from './messageBoard';
import Heading from '../../heading';

import './styles.scss';
import CardInvolve from '../../cardInvolve';

const mockData = [
  {
    'type': 'Team', 
    'name': 'Team design',
    'amount': '10.927.70',
    'detail': `Created on 02 July 2021 \n Created by Username`
  },
  {
    'type': 'Team', 
    'name': 'Team developer',
    'amount': '10.927.70',
    'detail': `Created on 02 July 2021 \n Created by Username`
  }
]

export const LeftContent = () => {
  return (
    <div className='leftContent'>
      <Heading type='h2' > About </Heading>
      <p className='leftContent__des'> 
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, \
        when an unknown printer took a galley of type and scrambled it to make a type specimen book 
      </p>
      <Heading type='h2' > How I'm getting involved </Heading>
      <div className='leftContent__cards'> 
        {
          mockData.map((item, index) => (
            <CardInvolve
              type={item.type}  
              name={item.name}
              amount={item.amount}
              detail={item.detail}
              key={index}
            />
          ))
        }
      </div>
      <MessageBoard />
    </div>
  )
}
