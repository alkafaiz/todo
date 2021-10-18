import React from 'react';
import { ToastBar, Toaster } from 'react-hot-toast';

function Alert() {
    return (
        <Toaster>
            {(t) => (
                <ToastBar toast={t}>
                    {({ icon, message }) => (
                        <div className="flex items-center" data-cy="modal-information">
                            {icon}
                            {message}
                        </div>
                    )}
                </ToastBar>
            )}
        </Toaster>
    );
}

export default Alert;
