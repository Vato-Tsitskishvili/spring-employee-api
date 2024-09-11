import React from 'react';

const Employee = ({ employee, deleteEmployeeById }) => {
    return (
        <tr key={employee.id}>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-xl">
                    {employee.firstName}
                </div>
            </td>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-xl">
                    {employee.lastName}
                </div>
            </td>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-xl">
                    {employee.emailId}
                </div>
            </td>
            <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-xl">
                <a
                    className="text-indigo-600 hover:text-indigo-800 px-4"
                >
                    Edit
                </a>
                <a
                    onClick={e => deleteEmployeeById(e, employee.id)}
                    className="text-red-600 hover:text-red-800 hover:cursor-pointer"
                >
                    Delete
                </a>
            </td>
        </tr>
    );
}

export default Employee;