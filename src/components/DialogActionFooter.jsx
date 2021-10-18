import React from 'react';
import Button from './Button';

function DialogActionFooter({ confirmLabel = 'Simpan', onCancel, onConfirm, disableConfirm = false }) {
    return (
        <div className="px-6 py-2 border-t flex justify-end">
            {!!onCancel && (
                <>
                    <Button variant="default" onClick={onCancel} size="medium">
                        Batal
                    </Button>
                    &emsp;
                </>
            )}
            <Button
                disabled={disableConfirm}
                data-cy="modal-add-save-button"
                type="submit"
                onClick={onConfirm}
                size="medium"
            >
                {confirmLabel}
            </Button>
        </div>
    );
}

export default DialogActionFooter;
