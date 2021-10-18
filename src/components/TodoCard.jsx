import React, { useState } from 'react';
import { getPriorityColor, parseBinaryFromBoolean } from '../helper/utilities';
import { updateTodoItem } from '../services/appService';
import IconButton from './IconButton';
import TrashIcon from './TrashIcon';
import toast from 'react-hot-toast';
import PencilIcon from './PencilIcon';

function TodoCard({ id, title, priority, isActive }) {
    const [isChecked, setIsChecked] = useState(!isActive);

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
    return (
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
                <IconButton size="small" icon={<PencilIcon size="18px" />} />
            </div>
            <div className="ml-auto">
                <IconButton size="small" icon={<TrashIcon />} />
            </div>
        </div>
    );
}

export default TodoCard;
