import React from 'react';
import { ChatBubbleBottomCenterIcon } from '@heroicons/react/24/solid';

function EmployeeSupport() {
    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <ChatBubbleBottomCenterIcon className="h-6 w-6 text-blue-600 mr-2" />
                Employee Query and Support
            </h2>
            <p className="mb-4">How can we help you today?</p>
            <button className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105">
                Start Chat
            </button>
            <p className="mt-4">Frequently Asked Questions:</p>
            <ul className="list-disc list-inside mt-2">
                <li>How do I reset my password?</li>
                <li>How do I submit a time-off request?</li>
                <li>Who do I contact for payroll issues?</li>
            </ul>
        </div>
    );
}

export default EmployeeSupport;
