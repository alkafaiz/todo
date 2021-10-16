import React from 'react';
import { parseISODateString } from '../helper/utilities';
import IconButton from './IconButton';
import TrashIcon from './TrashIcon';

function ActivityCard({ title, dateCreated }) {
    return (
        <div className="flex flex-col justify-between p-6 rounded-lg shadow-md bg-white h-44">
            <h3 className="text-2xl font-bold">{title}</h3>
            <div className="flex justify-between items-center">
                <span className="text-md text-gray-500">{parseISODateString(dateCreated)}</span>
                <IconButton icon={<TrashIcon />} size="small" />
            </div>
        </div>
    );
}

export default ActivityCard;
