import * as React from 'react';
import { DomRef, MutableRef, PlayPause } from './components';

import './style.css';

const App: React.F = () => {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <DomRef />
      <MutableRef />
      <PlayPause
        onClick={(isPlaying: boolean) => {
          console.log('video is playing ->' + isPlaying);
        }}
      />
    </div>
  );
};

export default App;
