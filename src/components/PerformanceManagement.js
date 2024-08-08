import React from 'react';
import { ChartBarIcon } from '@heroicons/react/24/solid';

function PerformanceManagement() {
    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <ChartBarIcon className="h-6 w-6 text-blue-600 mr-2" />
                Performance Management
            </h2>
            <p className="mb-4">Set your goals for the next quarter:</p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105">
                Set Goals
            </button>
            <p className="mt-4">360-degree feedback:</p>
            <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-2 transition duration-300 ease-in-out transform hover:scale-105">
                Request Feedback
            </button>
            <p className="mt-4">Upcoming performance review: November 2024</p>
        </div>
    );
}

export default PerformanceManagement;
