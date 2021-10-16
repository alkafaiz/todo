import React, { useEffect, useState } from 'react';
import { getActivities } from '../services/appService';
import ActivityCard from './ActivityCard';

function ActivityList() {
    const [activities, setActivities] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        loadActivities();
    }, []);

    async function loadActivities() {
        const activities = await getActivities();
        console.log(activities);
        setActivities(activities.data);
        setIsLoading(false);
    }

    return (
        <>
            {isLoading ? (
                'Loading...'
            ) : !activities.length ? (
                'Tidak ada activity. Tambah baru!'
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {activities.map((act) => (
                        <ActivityCard key={act.id} title={act.title} dateCreated={act.created_at} />
                    ))}
                </div>
            )}
        </>
    );
}

export default ActivityList;
