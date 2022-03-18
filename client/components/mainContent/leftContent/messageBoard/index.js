import React from 'react';
import { FurInfo } from '../../../furtherInfo';
import { ReportIssue } from '../../../reportIssue';
import Button from '../../../button';

import './styles.scss';
import Heading from '../../../heading';
import TextArea from '../../../textArea';
import TimeLineComment from '../../../timelineComment';

const mockData = [
  {
    title: 'test 1',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr'
  },
  {
    title: 'test 2',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr'
  },
  {
    title: 'test 3',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr'
  }
]

export const MessageBoard = () => {
  return (
    <div className='messageBoard'>
      <Heading type='h2' > Message Board </Heading>
      <form className='messageBoard__form' onSubmit={() => {}}>
        <TextArea value='Leave a message of support...' />
      </form>
      {
        mockData.map((value, index) => (
          <TimeLineComment key={index} content={value.content} title={value.title} />
        ))
      }
      <Button className='messageBoard__button' type='md' color fontWeight> View more </Button>
      <FurInfo />
      <ReportIssue />
    </div>
  )
}
