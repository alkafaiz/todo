import React from 'react';
import ReactModal from 'react-modal';

function Modal({ isOpen, onRequestClose, children, shouldCloseOnOverlayClick = true }) {
    return (
        <ReactModal
            className="bg-white border border-gray-50 shadow-md rounded-lg w-1/2 top-1/2 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            onRequestClose={onRequestClose}
            shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
            isOpen={isOpen}
            preventScroll={true}
            ariaHideApp={false}
        >
            {children}
        </ReactModal>
    );
}

export default Modal;
