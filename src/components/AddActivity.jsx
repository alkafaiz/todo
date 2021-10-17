import React from 'react';
import useModal from '../helper/useModal';
import { createActivity } from '../services/appService';
import AddIcon from './AddIcon';
import Button from './Button';
import Modal from './Modal';
import NewActivityDialog from './NewActivityDialog';

function AddActivity() {
    const { isModalOpen, handleOpenModal, handleCloseModal } = useModal();

    const onSubmit = async (data) => {
        console.log(data);
        await createActivity(data.name);
    };

    return (
        <div>
            <Button onClick={handleOpenModal} startIcon={<AddIcon />}>
                Tambah
            </Button>
            <Modal isOpen={isModalOpen} shouldCloseOnOverlayClick={false}>
                <NewActivityDialog onCancel={handleCloseModal} onConfirm={onSubmit} />
            </Modal>
        </div>
    );
}

export default AddActivity;
