import React from 'react';
import ActivityList from '../components/ActivityList';
import AddIcon from '../components/AddIcon';
import Button from '../components/Button';

function Dashboard() {
    return (
        <div className="py-8">
            <div className="mb-5 flex justify-between items-center">
                <h2 className="text-3xl font-bold">Activity</h2>
                <Button startIcon={<AddIcon />}>Tambah</Button>
            </div>
            <ActivityList />
        </div>
    );
}

export default Dashboard;
