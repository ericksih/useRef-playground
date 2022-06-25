import * as React from 'react';
import DomRef from './components/DomRef';
import MutableRef from './components/MutableRef';
import './style.css';

const App = () => {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <DomRef />
      <MutableRef />
    </div>
  );
};

export default App;
