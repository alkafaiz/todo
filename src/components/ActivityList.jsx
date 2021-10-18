import React, { useEffect } from 'react';
import { useActivity, useRefreshActivity } from '../helper/ActivityContext';
import ActivityCard from './ActivityCard';

function ActivityList() {
    const { activities, isLoading } = useActivity();
    const refreshActivity = useRefreshActivity();

    useEffect(() => {
        refreshActivity();
        // eslint-disable-next-line
    }, []);

    return (
        <>
            {isLoading ? (
                'Loading...'
            ) : !activities.length ? (
                'Tidak ada activity. Tambah baru!'
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {activities.map((act) => (
                        <ActivityCard key={act.id} id={act.id} title={act.title} dateCreated={act.created_at} />
                    ))}
                </div>
            )}
        </>
    );
}

export default ActivityList;
