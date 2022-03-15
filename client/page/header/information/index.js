import React from 'react'
import Navigate from '../navigate';

const Information = () => {
  return (
    <>
        <div className='information__logo'>
          <Avatar />
        </div>
        <Navigate />
        <div className='information__info'>
          <Avatar className='information__info--image' />
          <span> Christine <FaAngleDown className='information__info--icon' /> </span>
        </div>
    </>
  )
}

export default Information;