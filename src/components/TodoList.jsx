import React, { useCallback, useState } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { useRefreshTodo, useTodo } from '../helper/TodoContext';
import useModal from '../helper/useModal';
import { deleteTodoItem, updateTodoItem } from '../services/appService';
import DeleteDialog from './DeleteDialog';
import Modal from './Modal';
import TodoCard from './TodoCard';
import TodoItemDialog from './TodoItemDialog';

function TodoList() {
    const params = useParams();
    const { details } = useTodo();
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
    const [deletedItem, setDeletedItem] = useState(null);
    const [isDeleting, setIsDeleting] = useState(false);
    const [updatedItem, setUpdatedItem] = useState(null);
    const { refreshTodo, deleteTodo } = useRefreshTodo();

    const onUpdate = async (data) => {
        console.log(data);
        try {
            const { name, priority } = data;
            await updateTodoItem(updatedItem?.id, { priority, title: name });
            handleCloseEditModal();
            // toast.success('Todo item berhasil di update');
            refreshTodo(params?.id);
        } catch (error) {
            toast.error('Todo item gagal di update');
        }
    };

    const onDelete = async () => {
        try {
            setIsDeleting(true);
            await deleteTodoItem(deletedItem?.id);
            deleteTodo(deletedItem?.id);
            // refreshTodo(params?.id);
            toast.success('List item berhasil dihapus');
        } catch (error) {
            toast.error('List item gagal dihapus');
            console.log(error);
        } finally {
            setIsDeleting(false);
            handleCloseDeleteModal();
        }
    };

    const onDeleteClick = useCallback(
        (id, title) => {
            setDeletedItem({ id, title });
            handleOpenDeleteModal();
        },
        [handleOpenDeleteModal]
    );

    const onUpdateClick = useCallback(
        (id, name, priority) => {
            setUpdatedItem({ id, name, priority });
            handleOpenEditModal();
        },
        [handleOpenEditModal]
    );

    return (
        <>
            <div className="flex flex-col">
                {!details.items.length && <span data-cy="todo-empty-state">Tidak ada list item</span>}
                {details.items.map((todo) => (
                    <TodoCard
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        priority={todo.priority}
                        isActive={todo.is_active}
                        onUpdate={() => onUpdateClick(todo.id, todo.title, todo.priority)}
                        onDelete={() => onDeleteClick(todo.id, todo.title)}
                    />
                ))}
            </div>
            <Modal isOpen={isEditModalOpen} shouldCloseOnOverlayClick={false}>
                <TodoItemDialog
                    onCancel={handleCloseEditModal}
                    onConfirm={onUpdate}
                    title="Edit List Item"
                    initialValue={{ name: updatedItem?.name, priority: updatedItem?.priority }}
                />
            </Modal>
            <Modal isOpen={isDeleteModalOpen} shouldCloseOnOverlayClick={false}>
                <DeleteDialog
                    onCancel={handleCloseDeleteModal}
                    onConfirm={onDelete}
                    title={deletedItem?.title}
                    isLoading={isDeleting}
                    text="Apakah anda yakin menghapus List item"
                />
            </Modal>
        </>
    );
}

export default TodoList;
