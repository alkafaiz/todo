import React, { useContext, useState } from 'react';
import { getActivities } from '../services/appService';

const ActivityContext = React.createContext();
const RefreshActivityContext = React.createContext();

export function useActivity() {
    return useContext(ActivityContext);
}

export function useRefreshActivity() {
    return useContext(RefreshActivityContext);
}

const initialValue = { activities: [], isLoading: true };

export function ActivityProvider({ children }) {
    const [activities, setActivities] = useState(initialValue);

    async function loadActivities() {
        // setActivities((prev) => ({ ...prev, isLoading: true }));
        const activities = await getActivities();
        setActivities({ activities: activities.data, isLoading: false });
    }

    return (
        <ActivityContext.Provider value={activities}>
            <RefreshActivityContext.Provider value={loadActivities}>{children}</RefreshActivityContext.Provider>
        </ActivityContext.Provider>
    );
}
