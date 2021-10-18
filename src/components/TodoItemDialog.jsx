import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import DialogHeader from './DialogHeader';
import DialogActionFooter from './DialogActionFooter';
import PrioritySelect from './PrioritySelect';

function TodoItemDialog({ onCancel, onConfirm, title, initialValue }) {
    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        formState: { errors, isValid },
    } = useForm({
        mode: 'onChange',
    });

    useEffect(() => {
        if (initialValue) {
            setValue('priority', initialValue?.priority, { shouldValidate: true });
            setValue('name', initialValue?.name);
        } else {
            setValue('priority', 'very-high', { shouldValidate: true });
        }
        // eslint-disable-next-line
    }, []);

    return (
        <div data-cy="modal-add">
            <DialogHeader title={title} onClose={onCancel} />
            <form onSubmit={handleSubmit(onConfirm)}>
                <div className="p-6">
                    <label className="block mb-3">
                        <span data-cy="modal-add-name-title" className="text-gray-700">
                            Nama todo item
                        </span>
                        <input
                            data-cy="modal-add-name-input"
                            name="name"
                            type="text"
                            className="my-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            placeholder="Tambahkan nama todo item"
                            {...register('name', { required: true })}
                        />
                        {errors.name && <p className="text-red-500 text-sm">Name is required.</p>}
                    </label>
                    <label className="block">
                        <span data-cy="modal-add-priority-title" className="text-gray-700">
                            Priority
                        </span>
                        <PrioritySelect
                            {...register('priority', { required: true })}
                            onChange={(prio) => setValue('priority', prio, { shouldValidate: true })}
                            value={getValues('priority')}
                        />
                        {errors.priority && <p className="text-red-500 text-sm">Priority is required.</p>}
                    </label>
                </div>
                <DialogActionFooter disableConfirm={!isValid} />
            </form>
        </div>
    );
}

export default TodoItemDialog;
