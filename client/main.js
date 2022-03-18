import React from 'react';
import { render } from 'react-dom';
import Layout from './components/layout';
// import Page from './page';

import('./assets/styles/_base.scss');

// config redux

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers';

const store = createStore(rootReducer)

render(
  <Provider store={store}>
    <Layout />
    {/* <Page /> */}
  </Provider>
, document.getElementById('root'))