import React from 'react';
import { DocumentCheckIcon } from '@heroicons/react/24/solid';

function Onboarding() {
    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <DocumentCheckIcon className="h-6 w-6 text-blue-600 mr-2" />
                Employee Onboarding
            </h2>
            <p className="mb-4">Welcome to the company! Please sign the digital documents below to get started.</p>
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105">
                Sign Documents
            </button>
            <ul className="list-disc list-inside mt-4">
                <li>Task 1: Complete Profile</li>
                <li>Task 2: Meet Your Team</li>
                <li>Task 3: Complete Training</li>
            </ul>
        </div>
    );
}

export default Onboarding;
