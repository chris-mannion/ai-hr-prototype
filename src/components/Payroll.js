import React from 'react';
import { BanknotesIcon } from '@heroicons/react/24/solid';

function Payroll() {
    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <BanknotesIcon className="h-6 w-6 text-blue-600 mr-2" />
                Payroll and Compensation Management
            </h2>
            <p className="mb-4">Your latest payslip is available for download.</p>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105">
                Download Payslip
            </button>
            <p className="mt-4">Compensation History:</p>
            <ul className="list-disc list-inside mt-2">
                <li>July 2024: $5000</li>
                <li>June 2024: $5000</li>
            </ul>
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4 transition duration-300 ease-in-out transform hover:scale-105">
                View Tax Documents
            </button>
        </div>
    );
}

export default Payroll;
