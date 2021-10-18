import React from 'react';
import ActivityList from '../components/ActivityList';
import AddActivity from '../components/AddActivity';
import { ActivityProvider } from '../helper/ActivityContext';

function Dashboard() {
    return (
        <ActivityProvider>
            <div className="py-8">
                <div className="mb-5 flex justify-between items-center">
                    <h2 data-cy="activity-title" className="text-3xl font-bold">
                        Activity
                    </h2>
                    <AddActivity />
                </div>
                <ActivityList />
            </div>
        </ActivityProvider>
    );
}

export default Dashboard;
