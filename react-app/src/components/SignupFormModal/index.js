import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignupForm from './SignupForm';

function SignupFormModal() {
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