import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignupForm from './SignupForm';

function SignupFormModal() {
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
      <button style={style} onClick={() => setShowModal(true)}>Sign Up</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignupForm />
        </Modal>
      )}
    </>
  );
}

export default SignupFormModal;