import React from 'react';
import './Modal.css'; // Modal-specific styles (if any)

const Modal = ({ onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>Close</button>
        <h2>Location Modal</h2>
        <p>Content for the modal goes here.</p>
      </div>
    </div>
  );
};

export default Modal;
