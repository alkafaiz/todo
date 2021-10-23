import React, { useCallback, useContext, useState } from 'react';
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

    const loadActivities = useCallback(async () => {
        // setActivities((prev) => ({ ...prev, isLoading: true }));
        const activities = await getActivities();
        setActivities({ activities: activities.data, isLoading: false });
    }, [setActivities]);
    // async function loadActivities() {
    // }

    const deleteActivity = (id) => {
        const newActivities = activities.activities.filter((item) => item.id !== id);
        setActivities((prev) => ({ ...prev, activities: newActivities }));
    };

    return (
        <RefreshActivityContext.Provider value={{ refreshActivity: loadActivities, deleteActivity }}>
            <ActivityContext.Provider value={activities}>{children}</ActivityContext.Provider>
        </RefreshActivityContext.Provider>
    );
}
