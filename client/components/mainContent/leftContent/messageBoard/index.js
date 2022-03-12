import React from 'react';

import './styles.scss';

export const MessageBoard = () => {
  return (
    <div className='messageBoard'>
      <h2 className='messageBoard_title'> Message Board </h2>
      <form className='messageBoard_form' onSubmit=''>
        <textarea className='messageBoard_form-text' value='Leave a message of support...'/>
        <input className='messageBoard_form-button' type="submit" value="&rarr;" />
      </form>
      {/* <div class="timeline">
        <div class="container right">
          <div class="content">
            <h2>2016</h2>
            <p>Lorem ad necmazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
          </div>
        </div>
      </div> */}
    </div>
  )
}
