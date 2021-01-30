import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DemoLoginForm from './DemoLoginForm';

function DemoLoginFormModal() {
  const [showModal, setShowModal] = useState(false);

  const style = {
    background: 'linear-gradient(0deg, rgba(161,91,226,0.8793625356125356) 0%, rgba(40,27,255,1) 100%)',
    border: 0,
    color: 'white',
    height: '100px',
    padding: '0 30px',
  };

  return (
    <>
      <button style={style} onClick={() => setShowModal(true)}>Demo Login</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DemoLoginForm />
        </Modal>
      )}
    </>
  );
}

export default DemoLoginFormModal;