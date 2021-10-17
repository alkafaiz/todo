import React from 'react';
import Button from './Button';

function DeleteDialog({ onCancel, onConfirm, isLoading, title }) {
    return (
        <div className="p-6 flex flex-col items-center justify-between h-60">
            <svg style={{ width: '50px', height: '50px' }} viewBox="0 0 24 24">
                <path fill="rgba(239, 68, 68)" d="M12,2L1,21H23M12,6L19.53,19H4.47M11,10V14H13V10M11,16V18H13V16" />
            </svg>
            <p className="text-xl text-center font-semibold">
                Apakah anda yakin menghapus activity
                <br />
                <span className="font-bold">"{title}"?</span>
            </p>
            {isLoading ? (
                <span className="text-lg text-gray-600">Menghapus...</span>
            ) : (
                <div className="flex justify-evenly w-1/2">
                    <Button onClick={onCancel} variant="default" size="medium">
                        Batal
                    </Button>
                    <Button onClick={onConfirm} variant="danger" size="medium">
                        Hapus
                    </Button>
                </div>
            )}
        </div>
    );
}

export default DeleteDialog;
