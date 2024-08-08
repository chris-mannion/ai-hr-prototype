import React from 'react';
import { HeartIcon } from '@heroicons/react/24/solid';

function Benefits() {
    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <HeartIcon className="h-6 w-6 text-blue-600 mr-2" />
                Benefits Administration
            </h2>
            <p className="mb-4">Select your benefits for the upcoming year:</p>
            <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105">
                Enroll in Benefits
            </button>
            <p className="mt-4">Compare plans:</p>
            <ul className="list-disc list-inside mt-2">
                <li>Plan A: High Coverage</li>
                <li>Plan B: Medium Coverage</li>
                <li>Plan C: Low Coverage</li>
            </ul>
        </div>
    );
}

export default Benefits;
