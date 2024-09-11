import axios from 'axios';

const EMPLOYEE_API_BASE_URL = 'http://localhost:8080/api/v1/employees';

export const saveEmployeeService = employee => {
    return axios.post(EMPLOYEE_API_BASE_URL, employee);
}

export const getEmployeeService = () => {
    return axios.get(EMPLOYEE_API_BASE_URL);
}