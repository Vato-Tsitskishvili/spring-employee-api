import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getEmployeeByIdService, updateEmployeeByIdService } from '../services/EmployeeService';

const UpdateEmployee = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const [employee, setEmployee] = useState({
        id: id,
        firstName: '',
        lastName: '',
        emailId: ''
    });

    useEffect(() => {
        const fetchData = async () => {
            await getEmployeeByIdService(id)
                .then(response => setEmployee(response.data))
                .catch(err => console.error(err));
        }
        fetchData();
    }, [])

    const handleChange = e => {
        const value = e.target.value;
        setEmployee({...employee, [e.target.name]: value});
    }

    const updateEmployee = e => {
        e.preventDefault();
        console.log(employee);
        updateEmployeeByIdService(id, employee)
            .then(() => navigate('/'))
            .catch(err => console.error(err));
    }

    return (
        <section className="flex max-w-2xl shadow border-b mx-auto">
            <div className="px-8 py-8">
                <div className="font-thin text-2xl tracking-wider">
                    <h1>Update Employee</h1>
                </div>
                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600 text-sm font-normal">
                        First Name
                    </label>
                    <input
                        type="text"
                        className="h-10 w-96 border mt-2 px-2 py-2"
                        name="firstName"
                        value={employee.firstName}
                        onChange={e => handleChange(e)}
                    />
                </div>
                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600 text-sm font-normal">
                        Last Name
                    </label>
                    <input
                        type="text"
                        className="h-10 w-96 border mt-2 px-2 py-2"
                        name="lastName"
                        value={employee.lastName}
                        onChange={e => handleChange(e)}
                    />
                </div>
                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600 text-sm font-normal">
                        Email
                    </label>
                    <input
                        type="email"
                        className="h-10 w-96 border mt-2 px-2 py-2"
                        name="emailId"
                        value={employee.emailId}
                        onChange={e => handleChange(e)}
                    />
                </div>
                <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
                    <button
                        className="rounded text-white font-semibold bg-green-400 py-2 px-6 hover:bg-green-700"
                        onClick={e => updateEmployee(e)}
                    >
                        Update
                    </button>
                    <button
                        className="rounded text-white font-semibold bg-red-400 py-2 px-6 hover:bg-red-700"
                        onClick={() => navigate('/')}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </section>
    );
}

export default UpdateEmployee;