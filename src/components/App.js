
import React, { useState } from 'react';
import Child from './Child';
import './../styles/App.css';

const App = () => {
   
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };


  return (
    <div className="parent">
        {/* Do not remove the main div */}
        <Child showModal={showModal} onOpenModal={handleOpenModal} />
    </div>
  )
}

export default App
