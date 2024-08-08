import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Onboarding from './Onboarding';
import TimeOffManagement from './TimeOffManagement';
import Payroll from './Payroll';
import Benefits from './Benefits';
import PerformanceManagement from './PerformanceManagement';
import EmployeeSupport from './EmployeeSupport';
import Training from './Training';
import TalentAcquisition from './TalentAcquisition';
import HeadcountPlanning from './HeadcountPlanning';

function Dashboard() {
    const [activeComponent, setActiveComponent] = useState('Onboarding');

    return (
        <div className="flex">
            <Sidebar setActiveComponent={setActiveComponent} />
            <div className="flex-1 p-6 bg-gray-100">
                {activeComponent === 'Onboarding' && <Onboarding />}
                {activeComponent === 'TimeOffManagement' && <TimeOffManagement />}
                {activeComponent === 'Payroll' && <Payroll />}
                {activeComponent === 'Benefits' && <Benefits />}
                {activeComponent === 'PerformanceManagement' && <PerformanceManagement />}
                {activeComponent === 'EmployeeSupport' && <EmployeeSupport />}
                {activeComponent === 'Training' && <Training />}
                {activeComponent === 'TalentAcquisition' && <TalentAcquisition />}
                {activeComponent === 'HeadcountPlanning' && <HeadcountPlanning />}
            </div>
        </div>
    );
}

export default Dashboard;
