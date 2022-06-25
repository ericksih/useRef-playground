// UseRef bisa di gunakan untuk bikin pointer (referensi) ke element DOM.
import { useRef } from 'react';
import React = require('react');

const DomRef = () => {
  // Opsi 1: jika referensi tidak pernah null, maka bisa seperti ini
  // const inputRef = useRef<HTMLInputElement>(null!);

  // const handleFocus = () => {
  //   inputRef.current.focus();
  // };

  // Opsi 2: jika referensi bisa null, maka seperti ini:
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    inputRef.current?.focus(); // dgn Question mark (?) di current
  };

  return (
    <fieldset>
      <legend>
        <h3>
          Opsi 1 : UseRef bisa di gunakan membuat pointer (referensi) ke element
          DOM.
        </h3>
      </legend>
      <input type="text" ref={inputRef} placeholder="input" />
      <button onClick={handleFocus}>Focus on Input!</button>
    </fieldset>
  );
};

export default DomRef;
