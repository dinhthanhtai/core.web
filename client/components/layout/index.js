import React from 'react';
import { hot } from 'react-hot-loader';
import { Header } from '../header';
import { Information } from '../Information';
import { Donation } from '../donations';
import { MainContent } from '../mainContent';
import { Footer } from '../footer';

import "./styles.scss";

const Layout = () => {
  return (
    <div className='root'>
      <Header />
      <main>
        <Information />
        <Donation />
        <MainContent />
      </main>
      <Footer />
    </div>
  )
}

export default hot(module)(Layout)