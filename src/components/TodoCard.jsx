import React, { useState } from 'react';
import { getPriorityColor, parseBinaryFromBoolean } from '../helper/utilities';
import { deleteTodoItem, updateTodoItem } from '../services/appService';
import IconButton from './IconButton';
import TrashIcon from './TrashIcon';
import toast from 'react-hot-toast';
import PencilIcon from './PencilIcon';
import useModal from '../helper/useModal';
import Modal from './Modal';
import TodoItemDialog from './TodoItemDialog';
import { useRefreshTodo } from '../helper/TodoContext';
import { useParams } from 'react-router-dom';
import DeleteDialog from './DeleteDialog';

function TodoCard({ id, title, priority, isActive }) {
    const [isChecked, setIsChecked] = useState(!isActive);
    const {
        isModalOpen: isEditModalOpen,
        handleCloseModal: handleCloseEditModal,
        handleOpenModal: handleOpenEditModal,
    } = useModal();
    const {
        isModalOpen: isDeleteModalOpen,
        handleCloseModal: handleCloseDeleteModal,
        handleOpenModal: handleOpenDeleteModal,
    } = useModal();
    const refreshTodo = useRefreshTodo();
    const params = useParams();
    const [isDeleting, setIsDeleting] = useState(false);

    const onCheckActive = async (event) => {
        const value = event.target.checked;
        try {
            setIsChecked(value);
            await updateTodoItem(id, { is_active: parseBinaryFromBoolean(!value) });
            toast.success('Todo item berhasil di update');
        } catch (error) {
            toast.error('Todo item gagal di update');
            setIsChecked(value);
        }
    };

    const onUpdate = async (data) => {
        console.log(data);
        try {
            const { name, priority } = data;
            await updateTodoItem(id, { priority, title: name });
            handleCloseEditModal();
            toast.success('Todo item berhasil di update');
            refreshTodo(params?.id);
        } catch (error) {
            toast.error('Todo item gagal di update');
        }
    };

    const onDelete = async () => {
        try {
            setIsDeleting(true);
            await deleteTodoItem(id);
            refreshTodo(params?.id);
            handleCloseDeleteModal();
            toast.success('List item berhasil dihapus');
        } catch (error) {
            toast.error('List item gagal dihapus');
            console.log(error);
        }
    };

    return (
        <>
            <div className={`bg-white rounded-2xl shadow-lg py-4 px-6 flex items-center`}>
                <input
                    type="checkbox"
                    className="w-5 h-5 mr-7 rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-offset-0 focus:ring-blue-200 focus:ring-opacity-50"
                    checked={isChecked}
                    onChange={onCheckActive}
                />
                <div className={`w-4 h-4 rounded-full mr-4 ${getPriorityColor(priority)}`}></div>
                <span className={`text-lg ${isChecked ? 'line-through text-gray-500' : ''}`}>{title}</span>

                <div className="ml-2">
                    <IconButton onClick={handleOpenEditModal} size="small" icon={<PencilIcon size="18px" />} />
                </div>
                <div className="ml-auto">
                    <IconButton onClick={handleOpenDeleteModal} size="small" icon={<TrashIcon />} />
                </div>
            </div>
            <Modal isOpen={isEditModalOpen} shouldCloseOnOverlayClick={false}>
                <TodoItemDialog
                    onCancel={handleCloseEditModal}
                    onConfirm={onUpdate}
                    title="Edit List Item"
                    initialValue={{ name: title, priority }}
                />
            </Modal>
            <Modal isOpen={isDeleteModalOpen} shouldCloseOnOverlayClick={false}>
                <DeleteDialog
                    onCancel={handleCloseDeleteModal}
                    onConfirm={onDelete}
                    title={title}
                    isLoading={isDeleting}
                    text="Apakah anda yakin menghapus List item"
                />
            </Modal>
        </>
    );
}

export default TodoCard;
