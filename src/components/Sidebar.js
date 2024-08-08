import React from 'react';

function Sidebar({ setActiveComponent }) {
    return (
        <div className="h-screen bg-gray-800 text-white w-64 flex flex-col p-4">
            <h2 className="text-2xl font-semibold mb-6">HR Dashboard</h2>
            <button onClick={() => setActiveComponent('Onboarding')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-2 rounded">Onboarding</button>
            <button onClick={() => setActiveComponent('TimeOffManagement')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-2 rounded">Time Off</button>
            <button onClick={() => setActiveComponent('Payroll')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-2 rounded">Payroll</button>
            <button onClick={() => setActiveComponent('Benefits')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-2 rounded">Benefits</button>
            <button onClick={() => setActiveComponent('PerformanceManagement')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-2 rounded">Performance</button>
            <button onClick={() => setActiveComponent('EmployeeSupport')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-2 rounded">Support</button>
            <button onClick={() => setActiveComponent('Training')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-2 rounded">Training</button>
            <button onClick={() => setActiveComponent('TalentAcquisition')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-2 rounded">Talent</button>
            <button onClick={() => setActiveComponent('HeadcountPlanning')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-2 rounded">Headcount</button>
        </div>
    );
}

export default Sidebar;
