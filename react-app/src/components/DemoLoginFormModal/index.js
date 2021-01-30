import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DemoLoginForm from './DemoLoginForm';

function DemoLoginFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Demo Login</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DemoLoginForm />
        </Modal>
      )}
    </>
  );
}

export default DemoLoginFormModal;