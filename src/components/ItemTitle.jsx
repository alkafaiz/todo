import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import ChevronLeftIcon from './ChevronLeftIcon';
import IconButton from './IconButton';
import PencilIcon from './PencilIcon';
import SaveIcon from './SaveIcon';
import { useForm } from 'react-hook-form';
import { updateActivity } from '../services/appService';
import toast from 'react-hot-toast';

function ItemTitle({ title }) {
    const params = useParams();
    const history = useHistory();
    const [itemName, setItemName] = useState(title);
    const [isEditing, setIsEditing] = useState(false);

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();

    const onEdit = () => setIsEditing(true);
    const onCloseEdit = () => setIsEditing(false);

    useEffect(() => {
        setValue('name', title);
    }, []);

    const handleReturn = () => {
        history.push('/');
    };

    const onSubmit = async (data) => {
        const value = data.name;
        const oldValue = itemName;
        try {
            setItemName(value);
            setIsEditing(false);
            await updateActivity(params?.id, { title: value });
            toast.success('Activity berhasil di update');
        } catch (error) {
            console.log(error);
            setItemName(oldValue);
            toast.success('Activity gagal di update');
        }
    };

    return (
        <div className="flex items-center">
            <IconButton onClick={handleReturn} icon={<ChevronLeftIcon />} size="small" />
            {isEditing ? (
                <form onSubmit={handleSubmit(onSubmit)} className="flex items-center">
                    <input
                        name="name"
                        type="text"
                        className="my-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        placeholder="Tambahkan nama list item"
                        {...register('name', { required: true })}
                    />
                    <div className="ml-2">
                        <IconButton type="submit" icon={<SaveIcon />} />
                    </div>
                </form>
            ) : (
                <>
                    <h2 className="ml-3 text-3xl font-bold">{itemName}</h2>
                    <div className="ml-2">
                        <IconButton onClick={onEdit} icon={<PencilIcon />} />
                    </div>
                </>
            )}
        </div>
    );
}

export default ItemTitle;
