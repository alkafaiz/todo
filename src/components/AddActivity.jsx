import React from 'react';
import { useRefreshActivity } from '../helper/ActivityContext';
import useModal from '../helper/useModal';
import { createActivity } from '../services/appService';
import AddIcon from './AddIcon';
import Button from './Button';
import Modal from './Modal';
import NewActivityDialog from './NewActivityDialog';
import toast from 'react-hot-toast';

function AddActivity() {
    const { isModalOpen, handleOpenModal, handleCloseModal } = useModal();
    const refreshActivity = useRefreshActivity();

    const onSubmit = async (data) => {
        try {
            await createActivity(data.name);
            refreshActivity();
            handleCloseModal();
            toast.success('Activity berhasil ditambahkan');
        } catch (error) {
            console.log(error);
            toast.error('Activity gagal ditambahkan');
        }
    };

    return (
        <div>
            <Button data-cy="activity-add-button" onClick={handleOpenModal} startIcon={<AddIcon />}>
                Tambah
            </Button>
            <Modal isOpen={isModalOpen} shouldCloseOnOverlayClick={false}>
                <NewActivityDialog onCancel={handleCloseModal} onConfirm={onSubmit} />
            </Modal>
        </div>
    );
}

export default AddActivity;
