import { useRef, useState } from 'react';
import React = require('react');

const MutableRef = () => {
  const [timer, setTimer] = useState(0);
  const [pause, setPause] = useState(false);

  const interValRef = useRef<number | undefined>(undefined);

  const decreaseNum = () => setTimer((prev) => prev + 1);

  const handleClick = () => {
    if (pause) {
      clearInterval(interValRef.current);
    } else {
      interValRef.current = window.setInterval(decreaseNum, 1000);
    }
    setPause((prev) => !prev);
  };

  return (
    <fieldset>
      <legend>
        <h3>Opsi 2: Mutable</h3>
      </legend>

      <h3>
        Timer useRef :
        <span
          style={{
            color: 'red',
            marginLeft: '10px',
          }}
        >
          {timer}
        </span>
      </h3>

      <button onClick={handleClick}>{!pause ? 'Start' : 'Pause'}</button>
    </fieldset>
  );
};

export default MutableRef;
