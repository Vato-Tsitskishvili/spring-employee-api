import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteEmployeeByIdService, getEmployeeService } from '../services/EmployeeService';
import Employee from "./Employee";

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

    const deleteEmployeeById = (e, id) => {
        e.preventDefault();
        deleteEmployeeByIdService(id)
            .then(() => {
                if (employees) {
                    setEmployees((prevElement) => {
                        return prevElement.filter(employee => employee.id !== id);
                    });
                }
            })
            .catch(err => console.error(err));
    }

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
                            {employees.map(employee =>
                                <Employee
                                    employee={employee}
                                    deleteEmployeeById={deleteEmployeeById}
                                    key={employee.id}
                                />
                            )}
                        </tbody>
                    )}
                </table>
            </div>
        </section>
    );
}

export default EmployeeList;