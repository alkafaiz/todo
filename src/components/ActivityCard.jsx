import React, { memo } from 'react';
import { parseISODateString } from '../helper/utilities';
import IconButton from './IconButton';
import TrashIcon from './TrashIcon';
import { useHistory } from 'react-router-dom';

function ActivityCard({ id, title, dateCreated, onDelete }) {
    const history = useHistory();

    const handleNavigate = () => {
        history.push(`/item/${id}`);
    };

    return (
        <>
            <div data-cy="activity-item" className="flex flex-col justify-between p-6 rounded-lg shadow-md bg-white">
                <div onClick={handleNavigate} className="h-32 cursor-pointer">
                    <h3 data-cy="activity-item-title" className="text-2xl font-bold line-clamp-2">
                        {title}
                    </h3>
                </div>
                <div className="flex justify-between items-center">
                    <span data-cy="activity-item-date" className="text-md text-gray-500">
                        {parseISODateString(dateCreated)}
                    </span>
                    <IconButton
                        data-cy="activity-item-delete-button"
                        onClick={onDelete}
                        icon={<TrashIcon />}
                        size="small"
                    />
                </div>
            </div>
        </>
    );
}

export default memo(ActivityCard);
