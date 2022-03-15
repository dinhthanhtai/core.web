import React from 'react';
import Button from '../../../components/button';
import AmountCard from '../../amountCard';
import Input from '../../Input';
import Heading from '../../heading';

import './styles.scss';

const mockData = {
  'image': '',
  'content': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s\'',
  'listCard': ['5', '10', '15', '20']
}

export const RightContent = () => {
  return (
    <div className='rightContent'>
      <Heading type='h2' className='rightContent__title'>Select a donation amount</Heading>
      <div className='rightContent__card'>
        <img 
          alt='loading...' 
          className='rightContent__card--image' 
          src='https://img.freepik.com/free-vector/charity-doodle-vector-people-donating-things_53876-126415.jpg?size=626&ext=jpg&ga=GA1.2.1518270500.1633132800' 
        />
        <p className='rightContent__card--paragraph'>
          {mockData.content}
        </p>
      </div>
      <div className='rightContent__amount'>
        {
          mockData.listCard.map((value, idx) => (
            <AmountCard key={idx}>
              {'$' + value}
            </AmountCard>
          ))

        }
      </div>
      <Input className='rightContent__input' type='text' defaultValue='Enter a customer amount' />
      <div className='rightContent__checkbox'>
        <Input className='rightContent__checkbox--element' type="checkbox" id="donate-check" name="donate-check" />
        <label className='rightContent__checkbox--label' for="donate-check"> Make this a monthly donation </label>
      </div>
      <Button 
        type='md'  
        backgroundColor 
        fontWeight
      > Donate </Button>
    </div>
  )
}
