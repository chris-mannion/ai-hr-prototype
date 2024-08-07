import React from 'react';

function Payroll() {
    return (
        <div>
            <h2>Payroll and Compensation Management</h2>
            <p>Your latest payslip is available for download.</p>
            <button>Download Payslip</button>
            <p>Compensation History:</p>
            <ul>
                <li>July 2024: $5000</li>
                <li>June 2024: $5000</li>
            </ul>
            <button>View Tax Documents</button>
        </div>
    );
}

export default Payroll;
