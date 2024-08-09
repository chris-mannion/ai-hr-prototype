import React, { useState, Suspense } from 'react';
import Sidebar from './Sidebar';

const Onboarding = React.lazy(() => import('./Onboarding'));
const TimeOffManagement = React.lazy(() => import('./TimeOffManagement'));
const Payroll = React.lazy(() => import('./Payroll'));
const Benefits = React.lazy(() => import('./Benefits'));
const PerformanceManagement = React.lazy(() => import('./PerformanceManagement'));
const EmployeeSupport = React.lazy(() => import('./EmployeeSupport'));
const Training = React.lazy(() => import('./Training'));
const TalentAcquisition = React.lazy(() => import('./TalentAcquisition'));
const HeadcountPlanning = React.lazy(() => import('./HeadcountPlanning'));

function Dashboard() {
    const [activeComponent, setActiveComponent] = useState('Onboarding');

    return (
        <div className="flex">
            <Sidebar setActiveComponent={setActiveComponent} />
            <div className="flex-1 p-6 bg-gray-100">
                <Suspense fallback={<div>Loading...</div>}>
                    {activeComponent === 'Onboarding' && <Onboarding />}
                    {activeComponent === 'TimeOffManagement' && <TimeOffManagement />}
                    {activeComponent === 'Payroll' && <Payroll />}
                    {activeComponent === 'Benefits' && <Benefits />}
                    {activeComponent === 'PerformanceManagement' && <PerformanceManagement />}
                    {activeComponent === 'EmployeeSupport' && <EmployeeSupport />}
                    {activeComponent === 'Training' && <Training />}
                    {activeComponent === 'TalentAcquisition' && <TalentAcquisition />}
                    {activeComponent === 'HeadcountPlanning' && <HeadcountPlanning />}
                </Suspense>
            </div>
        </div>
    );
}

export default Dashboard;
