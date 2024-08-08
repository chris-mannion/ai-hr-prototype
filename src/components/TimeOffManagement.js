import React from 'react';
import { CalendarIcon } from '@heroicons/react/24/solid';

function TimeOffManagement() {
    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <CalendarIcon className="h-6 w-6 text-blue-600 mr-2" />
                Time Off Management
            </h2>
            <p className="mb-4">Submit your leave request below:</p>
            <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105">
                Request Leave
            </button>
            <p className="mt-4">Your leave balance: 10 days</p>
            <p className="mt-2">Upcoming leave: No upcoming leave.</p>
        </div>
    );
}

export default TimeOffManagement;
