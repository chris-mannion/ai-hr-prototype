import React from 'react';
import { ChartPieIcon } from '@heroicons/react/24/solid';

function HeadcountPlanning() {
    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <ChartPieIcon className="h-6 w-6 text-blue-600 mr-2" />
                Headcount Planning
            </h2>
            <p className="mb-4">Plan your workforce and budget for the upcoming year:</p>
            <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105">
                Create Headcount Plan
            </button>
            <p className="mt-4">Scenarios:</p>
            <ul className="list-disc list-inside mt-2">
                <li>Scenario 1: Aggressive Growth</li>
                <li>Scenario 2: Steady Growth</li>
                <li>Scenario 3: Conservative Growth</li>
            </ul>
        </div>
    );
}

export default HeadcountPlanning;
