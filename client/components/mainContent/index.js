import React from 'react'
import { LeftContent } from './leftContent'
import { RightContent } from './rightContent'

import './styles.scss';

export const MainContent = () => {
  return (
    <section className='mainContent'>
      <LeftContent />
      <RightContent />
    </section>
  )
}
