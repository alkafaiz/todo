import React from 'react';
import useModal from '../helper/useModal';
import { createTodoItem } from '../services/appService';
import AddIcon from './AddIcon';
import Button from './Button';
import Modal from './Modal';
import toast from 'react-hot-toast';
import TodoItemDialog from './TodoItemDialog';
import { useParams } from 'react-router-dom';
import { useRefreshTodo } from '../helper/TodoContext';

function AddTodoItem() {
    const params = useParams();
    const { isModalOpen, handleOpenModal, handleCloseModal } = useModal();
    const { refreshTodo } = useRefreshTodo();

    const onSubmit = async (data) => {
        try {
            await createTodoItem(params?.id, data.name, data.priority);
            handleCloseModal();
            refreshTodo(params?.id);
            // toast.success('Todo berhasil ditambahkan');
        } catch (error) {
            console.log(error);
            toast.error('Todo gagal ditambahkan');
        }
    };

    return (
        <div className="flex items-center">
            <Button data-cy="todo-add-button" onClick={handleOpenModal} startIcon={<AddIcon />}>
                Tambah
            </Button>
            <Modal isOpen={isModalOpen} onRequestClose={handleCloseModal}>
                <TodoItemDialog onCancel={handleCloseModal} onConfirm={onSubmit} title="Tambah List Item" />
            </Modal>
        </div>
    );
}

export default AddTodoItem;
