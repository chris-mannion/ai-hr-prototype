import React from 'react';
import { AcademicCapIcon } from '@heroicons/react/24/solid';

function Training() {
    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <AcademicCapIcon className="h-6 w-6 text-blue-600 mr-2" />
                Training and Development
            </h2>
            <p className="mb-4">Explore our course catalog and enroll in courses:</p>
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105">
                View Course Catalog
            </button>
            <p className="mt-4">Your progress:</p>
            <ul className="list-disc list-inside mt-2">
                <li>Course 1: Completed</li>
                <li>Course 2: In Progress</li>
            </ul>
        </div>
    );
}

export default Training;
