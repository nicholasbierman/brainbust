import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);

  const style = {
    background: 'transparent',
    border: 0,
    color: 'white',
    height: '100px',
    padding: '0 30px',
    borderStyle: 'none',
    outline: 'none',
    fontWeight: 'bold',
    cursor: 'pointer'
  };

  return (
    <>
      <button style={style} onClick={() => setShowModal(true)}>Log In</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;