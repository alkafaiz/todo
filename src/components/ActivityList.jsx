import React, { useCallback, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useActivity, useRefreshActivity } from '../helper/ActivityContext';
import useModal from '../helper/useModal';
import { deleteActivity } from '../services/appService';
import ActivityCard from './ActivityCard';
import DeleteDialog from './DeleteDialog';
import Modal from './Modal';

function ActivityList() {
    const { isModalOpen, handleCloseModal, handleOpenModal } = useModal();
    const { activities, isLoading } = useActivity();
    const { refreshActivity, deleteActivity: deleteActivityInContext } = useRefreshActivity();
    const [isDeleting, setIsDeleting] = useState(false);
    const [deletedItem, setDeletedItem] = useState(null);

    useEffect(() => {
        refreshActivity();
        // eslint-disable-next-line
    }, []);

    const onDeleteClick = useCallback(
        (id, title) => {
            setDeletedItem({ id, title });
            handleOpenModal();
        },
        [handleOpenModal]
    );

    const handleDelete = async () => {
        try {
            setIsDeleting(true);
            await deleteActivity(deletedItem?.id);
            deleteActivityInContext(deletedItem?.id);
            toast.success('Activity berhasil dihapus');
        } catch (error) {
            toast.error('Activity gagal dihapus');
            console.log(error);
        } finally {
            setIsDeleting(false);
            handleCloseModal();
        }
    };

    return (
        <>
            {isLoading ? (
                'Loading...'
            ) : !activities.length ? (
                <div data-cy="activity-empty-state">Tidak ada activity. Tambah baru!</div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {activities.map((act) => (
                        <ActivityCard
                            key={act.id}
                            id={act.id}
                            title={act.title}
                            dateCreated={act.created_at}
                            onDelete={() => onDeleteClick(act.id, act.title)}
                        />
                    ))}
                </div>
            )}
            <Modal isOpen={isModalOpen} onRequestClose={handleCloseModal}>
                <DeleteDialog
                    onCancel={handleCloseModal}
                    onConfirm={handleDelete}
                    isLoading={isDeleting}
                    title={deletedItem?.title}
                />
            </Modal>
        </>
    );
}

export default ActivityList;
