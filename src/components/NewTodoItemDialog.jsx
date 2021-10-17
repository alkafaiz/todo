import React from 'react';
import { useForm } from 'react-hook-form';
import DialogHeader from './DialogHeader';
import DialogActionFooter from './DialogActionFooter';
import PrioritySelect from './PrioritySelect';

function NewTodoItemDialog({ onCancel, onConfirm }) {
    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        formState: { errors },
    } = useForm();

    function onConfirm1(data) {
        console.log(data);
    }

    return (
        <div>
            <DialogHeader title="Tambah List Item" onClose={onCancel} />
            <form onSubmit={handleSubmit(onConfirm1)}>
                <div className="p-6">
                    <label className="block mb-3">
                        <span className="text-gray-700">Nama List Item</span>
                        <input
                            name="name"
                            type="text"
                            className="my-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            placeholder="Tambahkan nama list item"
                            {...register('name', { required: true })}
                        />
                        {errors.name && <p className="text-red-500 text-sm">Name is required.</p>}
                    </label>
                    <label className="block">
                        <span className="text-gray-700">Priority</span>
                        <PrioritySelect
                            {...register('priority', { required: true })}
                            onChange={(prio) => setValue('priority', prio, { shouldValidate: true })}
                            value={getValues('priority')}
                        />
                        {errors.priority && <p className="text-red-500 text-sm">Priority is required.</p>}
                    </label>
                </div>
                <DialogActionFooter />
            </form>
        </div>
    );
}

export default NewTodoItemDialog;
