import React from 'react';
import { useRefreshActivity } from '../helper/ActivityContext';
import { createActivity } from '../services/appService';
import AddIcon from './AddIcon';
import Button from './Button';
import toast from 'react-hot-toast';

function AddActivity() {
    const refreshActivity = useRefreshActivity();
    // const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async () => {
        try {
            // setIsLoading(true);
            await createActivity('New Activity');
            refreshActivity();
            // setIsLoading(false);
            // toast.success('Activity berhasil ditambahkan');
        } catch (error) {
            console.log(error);
            // setIsLoading(false);
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
