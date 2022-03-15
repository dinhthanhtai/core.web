import React from 'react';
import { FaRegFlag } from 'react-icons/fa';

import './styles.scss';

export const ReportIssue = () => {
  return (
    <div className='reportIssue'>
      <div className='reportIssue__block'>
        <FaRegFlag />
        <span className='reportIssue__block--title'> Report an issue </span>
      </div>
      <span className='reportIssue__report'> Report </span>
    </div>
  )
}
