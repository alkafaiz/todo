import React, { useEffect, useState } from 'react';
import { getActivities } from '../services/appService';

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
        <div>
            {isLoading
                ? 'Loading...'
                : !activities.length
                ? 'Tidak ada activity. Tambah baru!'
                : activities.map((act) => act.title)}
        </div>
    );
}

export default ActivityList;
