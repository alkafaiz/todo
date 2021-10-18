import React from 'react';
import CloseIcon from './CloseIcon';
import IconButton from './IconButton';

function DialogHeader({ title, onClose }) {
    return (
        <div className="flex justify-between items-center border-b py-3 px-6">
            <h2 data-cy="modal-add-title" className="text-xl font-bold">
                {title}
            </h2>
            <IconButton data-cy="modal-add-close-button" onClick={onClose} size="small" icon={<CloseIcon />} />
        </div>
    );
}

export default DialogHeader;
