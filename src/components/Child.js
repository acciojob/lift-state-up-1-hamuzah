// Child.js
import React from 'react';

const Child = ({ showModal, onOpenModal }) => {
  return (
    <div>
      <button onClick={onOpenModal}>Show Modal</button>
      {showModal ? <p>Modal is open</p> : <p>Modal is closed</p>}
    </div>
  );
};

export default Child;