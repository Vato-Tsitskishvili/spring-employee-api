import React from 'react';
import { useNavigate } from 'react-router-dom';

const Employee = ({ employee, deleteEmployeeById }) => {

    const navigate = useNavigate();

    const editEmployee = (e, id) => {
        e.preventDefault();
        navigate(`/edit-employee/${id}`);
    }

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
                    {employee.email}
                </div>
            </td>
            <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-xl">
                <a
                    onClick={e => editEmployee(e, employee.id)}
                    className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer"
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