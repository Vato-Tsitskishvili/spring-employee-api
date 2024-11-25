import axios from 'axios';

const EMPLOYEE_API_BASE_URL = 'http://localhost:8080/api/v1/employees';

export const getEmployeeService = () => {
    return axios.get(EMPLOYEE_API_BASE_URL);
}

export const getEmployeeByIdService = id => {
    return axios.get(EMPLOYEE_API_BASE_URL + '/' + id);
}

export const saveEmployeeService = employee => {
    return axios.post(EMPLOYEE_API_BASE_URL, employee);
}

export const updateEmployeeByIdService = (id, employee) => {
    return axios.put(EMPLOYEE_API_BASE_URL + '/' + id, employee);
}

export const deleteEmployeeByIdService = (id) => {
    return axios.delete(EMPLOYEE_API_BASE_URL + '/' + id);
}