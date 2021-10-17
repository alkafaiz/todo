import React from 'react';
import ActivityList from '../components/ActivityList';
import AddActivity from '../components/AddActivity';

function Dashboard() {
    return (
        <div className="py-8">
            <div className="mb-5 flex justify-between items-center">
                <h2 className="text-3xl font-bold">Activity</h2>
                <AddActivity />
            </div>
            <ActivityList />
        </div>
    );
}

export default Dashboard;
