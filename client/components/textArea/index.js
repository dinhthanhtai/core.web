import React from 'react';
import Input from '../Input';

import './styles.scss';

const TextArea = (props) => {
  const { value, onChange = () => {}, defaultValue = '' } = props;

  return (
    <div className='containerArea'>
      <textarea onChange={()=> {}} className='containerArea__textArea' value={value} />
      <Input className='containerArea__buttonSubmitArea' type="submit" value="&rarr;" />
    </div>
  )
}

export default TextArea