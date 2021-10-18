import React from 'react';
import useModal from '../helper/useModal';
import { createTodoItem } from '../services/appService';
import AddIcon from './AddIcon';
import Button from './Button';
import Modal from './Modal';
import toast from 'react-hot-toast';
import NewTodoItemDialog from './NewTodoItemDialog';
import { useParams } from 'react-router-dom';
import { useRefreshTodo } from '../helper/TodoContext';

function AddTodoItem() {
    const params = useParams();
    const { isModalOpen, handleOpenModal, handleCloseModal } = useModal();
    const refreshTodo = useRefreshTodo();

    const onSubmit = async (data) => {
        try {
            await createTodoItem(params?.id, data.name, data.priority);
            refreshTodo(params?.id);
            handleCloseModal();
            toast.success('Todo berhasil ditambahkan');
        } catch (error) {
            console.log(error);
            toast.error('Todo gagal ditambahkan');
        }
    };

    return (
        <div>
            <Button onClick={handleOpenModal} startIcon={<AddIcon />}>
                Tambah
            </Button>
            <Modal isOpen={isModalOpen} shouldCloseOnOverlayClick={false}>
                <NewTodoItemDialog onCancel={handleCloseModal} onConfirm={onSubmit} />
            </Modal>
        </div>
    );
}

export default AddTodoItem;
