import React from 'react';
import { useRefreshActivity } from '../helper/ActivityContext';
import { createActivity } from '../services/appService';
import AddIcon from './AddIcon';
import Button from './Button';
import toast from 'react-hot-toast';

function AddActivity() {
    const refreshActivity = useRefreshActivity();

    const onSubmit = async () => {
        try {
            await createActivity('New Activity');
            refreshActivity();
            toast.success('Activity berhasil ditambahkan');
        } catch (error) {
            console.log(error);
            toast.error('Activity gagal ditambahkan');
        }
    };

    return (
        <div>
            <Button data-cy="activity-add-button" onClick={onSubmit} startIcon={<AddIcon />}>
                Tambah
            </Button>
        </div>
    );
}

export default AddActivity;
