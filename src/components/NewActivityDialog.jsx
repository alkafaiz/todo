import React from 'react';
import { useForm } from 'react-hook-form';
import DialogHeader from './DialogHeader';
import DialogActionFooter from './DialogActionFooter';

function NewActivityDialog({ onCancel, onConfirm }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <div>
            <DialogHeader title="Tambah Activity" onClose={onCancel} />
            <form onSubmit={handleSubmit(onConfirm)}>
                <div className="p-6">
                    <label className="block mb-3">
                        <span className="text-gray-700">Nama activity</span>
                        <input
                            name="name"
                            type="text"
                            className="my-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            placeholder="New Activity"
                            {...register('name', { required: true })}
                        />
                        {errors.name && <p className="text-red-500 text-sm">Name is required.</p>}
                    </label>
                </div>
                <DialogActionFooter />
            </form>
        </div>
    );
}

export default NewActivityDialog;
