import React from 'react';
import { render } from 'react-dom';
import './style.css';

import Rodic from './components/Rodic';

const App = () => {
  return (
    <>
      <h1>Práce v lekci 10</h1>
      <Rodic />
    </>
  );
}

render(<App />, document.querySelector('#app'));
