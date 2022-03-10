import React from 'react';
import { hot } from 'react-hot-loader';
import { Header } from '../header';
import { Information } from '../Information';
import { Donation } from '../donations';
import { Footer } from '../footer';

import "./styles.scss";

const HelloWorld = () => {
  return (
    <div className='root'>
      <Header />
      <main>
        <Information />
        {/* <Donation /> */}
      </main>
      <Footer />
    </div>
  )
}

export default hot(module)(HelloWorld)