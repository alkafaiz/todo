import React, { memo, useCallback } from 'react';
import { useRefreshActivity } from '../helper/ActivityContext';
import { createActivity } from '../services/appService';
import AddIcon from './AddIcon';
import Button from './Button';
import toast from 'react-hot-toast';

const TambahButton = ({ onClick }) => (
    <Button data-cy="activity-add-button" onClick={onClick} startIcon={<AddIcon />}>
        Tambah
    </Button>
);

function AddActivity() {
    const { refreshActivity } = useRefreshActivity();
    // const [isLoading, setIsLoading] = useState(false);

    const refresh = useCallback(() => {
        refreshActivity();
    }, [refreshActivity]);

    const onSubmit = async () => {
        try {
            // setIsLoading(true);
            await createActivity('New Activity');
            refresh();
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
            <TambahButton onClick={onSubmit} />
            {/* <Button data-cy="activity-add-button" onClick={onSubmit} startIcon={<AddIcon />}>
                Tambah
            </Button> */}
        </div>
    );
}

export default memo(AddActivity);
