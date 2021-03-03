import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import Contributors from './Contributors';

function ContributorsModal() {
  const [showModal, setShowModal] = useState(false);

  const style = {
    background: 'transparent',
    border: 0,
    color: 'rgba(29, 26, 206, 0.7)',
    borderStyle: 'none',
    outline: 'none',
    fontWeight: 'bold',
    cursor: 'pointer'
  };

  return (
    <>
      <button style={style} onClick={() => setShowModal(true)}>Contributors</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <Contributors />
        </Modal>
      )}
    </>
  );
}

export default ContributorsModal;