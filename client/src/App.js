import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import { Provider } from 'react-redux';
import store from './store';

import Routes from './Routes';

const App = () => (
  <Provider store={store}>
    <Router>
      <Routes />
    </Router>
  </Provider>
);

export default App;
