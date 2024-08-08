import React from 'react';
import { BriefcaseIcon } from '@heroicons/react/24/solid';

function TalentAcquisition() {
    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <BriefcaseIcon className="h-6 w-6 text-blue-600 mr-2" />
                Talent Acquisition
            </h2>
            <p className="mb-4">Create a new job posting:</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105">
                Create Job Posting
            </button>
            <p className="mt-4">Track your applicants:</p>
            <ul className="list-disc list-inside mt-2">
                <li>Position: Software Engineer</li>
                <li>Applicants: 15</li>
                <li>Interviews Scheduled: 5</li>
            </ul>
        </div>
    );
}

export default TalentAcquisition;
