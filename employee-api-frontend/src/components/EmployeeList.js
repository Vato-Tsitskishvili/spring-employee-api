import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getEmployeeService } from '../services/EmployeeService';

const EmployeeList = () => {

    const navigate = useNavigate();
    const [employees, setEmployees] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            await getEmployeeService()
                .then(response => setEmployees(response.data))
                .catch(err => console.error(err));

            setLoading(false);
        }
        fetchData();
    }, [])

    return (
        <section className="container mx-auto my-8">
            <div className="h-12">
                <button
                    className="rounded bg-slate-600 text-white px-6 py-2 font-semibold"
                    onClick={() => navigate("/add-employee")}
                >
                    Add Employee
                </button>
            </div>
            <div className="flex shadow border-b">
                <table className="min-w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="text-left font-medium uppercase tracking-wider py-3 px-6">
                                First name
                            </th>
                            <th className="text-left font-medium uppercase tracking-wider py-3 px-6">
                                Last Name
                            </th>
                            <th className="text-left font-medium uppercase tracking-wider py-3 px-6">
                                Email ID
                            </th>
                            <th className="text-right font-medium uppercase tracking-wider py-3 px-6">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    {!loading && (
                        <tbody className="bg-white">
                            {employees.map(employee => (
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
                                        <a href="#" className="text-indigo-600 hover:text-indigo-800 px-4">
                                            Edit
                                        </a>
                                        <a href="#" className="text-red-600 hover:text-red-800">
                                            Delete
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    )}
                </table>
            </div>
        </section>
    );
}

export default EmployeeList;