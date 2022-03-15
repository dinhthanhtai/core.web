import React from 'react';
import Input from '../Input';

import './styles.scss';

const TextArea = (props) => {
  const { value } = props;

  return (
    <div className='containerArea'>
      <textarea className='containerArea__textArea' value={value} />
      <Input className='containerArea__buttonSubmitArea' type="submit" value="&rarr;" />
    </div>
  )
}

export default TextArea