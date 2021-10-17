import React, { useState } from 'react';
import { parseISODateString } from '../helper/utilities';
import IconButton from './IconButton';
import TrashIcon from './TrashIcon';
import Modal from './Modal';
import DeleteDialog from './DeleteDialog';
import { deleteActivity } from '../services/appService';
import useModal from '../helper/useModal';
import { useRefreshActivity } from '../helper/ActivityContext';
import toast from 'react-hot-toast';

function ActivityCard({ id, title, dateCreated }) {
    const { isModalOpen, handleCloseModal, handleOpenModal } = useModal();
    const [isDeleting, setIsDeleting] = useState(false);
    const refreshActivity = useRefreshActivity();

    const handleDelete = async () => {
        try {
            setIsDeleting(true);
            await deleteActivity(id);
            refreshActivity();
            toast.success('Activity berhasil dihapus');
        } catch (error) {
            toast.error('Activity gagal dihapus');
            console.log(error);
        }
    };

    return (
        <>
            <div className="flex flex-col justify-between p-6 rounded-lg shadow-md bg-white h-44">
                <h3 className="text-2xl font-bold line-clamp-2">{title}</h3>
                <div className="flex justify-between items-center">
                    <span className="text-md text-gray-500">{parseISODateString(dateCreated)}</span>
                    <IconButton onClick={handleOpenModal} icon={<TrashIcon />} size="small" />
                </div>
            </div>
            <Modal isOpen={isModalOpen} shouldCloseOnOverlayClick={false}>
                <DeleteDialog
                    onCancel={handleCloseModal}
                    onConfirm={handleDelete}
                    isLoading={isDeleting}
                    title={title}
                />
            </Modal>
        </>
    );
}

export default ActivityCard;
