import * as React from 'react';
import { DomRef, MutableRef } from './components';
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
