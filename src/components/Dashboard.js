import React, { useState } from 'react';
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
        <div>
            <h1>HR Dashboard</h1>
            <div>
                <button onClick={() => setActiveComponent('Onboarding')}>Onboarding</button>
                <button onClick={() => setActiveComponent('TimeOffManagement')}>Time Off Management</button>
                <button onClick={() => setActiveComponent('Payroll')}>Payroll</button>
                <button onClick={() => setActiveComponent('Benefits')}>Benefits</button>
                <button onClick={() => setActiveComponent('PerformanceManagement')}>Performance Management</button>
                <button onClick={() => setActiveComponent('EmployeeSupport')}>Employee Support</button>
                <button onClick={() => setActiveComponent('Training')}>Training</button>
                <button onClick={() => setActiveComponent('TalentAcquisition')}>Talent Acquisition</button>
                <button onClick={() => setActiveComponent('HeadcountPlanning')}>Headcount Planning</button>
            </div>
            <div>
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
