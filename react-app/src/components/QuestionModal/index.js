import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import QuestionBox from './QuestionBox';

function QuestionBoxModal() {
  const [showModal, setShowModal] = useState(false);

  const style = {
    background: 'linear-gradient(0deg, rgba(161,91,226,0.8793625356125356) 0%, rgba(40,27,255,1) 100%)',
    border: 0,
    color: 'white',
    height: '50px',
    padding: '0 30px',
  };

  return (
    <>
      <button style={style} onClick={() => setShowModal(true)}>New Question</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <QuestionBox />
        </Modal>
      )}
    </>
  );
}

export default QuestionBoxModal;
