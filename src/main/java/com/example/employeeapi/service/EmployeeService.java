package com.example.employeeapi.service;

import com.example.employeeapi.mapper.EmployeeMapper;
import com.example.employeeapi.model.dto.Employee;
import com.example.employeeapi.model.entity.EmployeeEntity;
import com.example.employeeapi.repository.EmployeeRepository;
import org.springframework.stereotype.Service;

@Service
public class EmployeeService {

    private final EmployeeRepository employeeRepository;

    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    public Employee createEmployee(Employee employee) {
        EmployeeEntity employeeEntity = EmployeeMapper.mapDtoToEntity(employee);
        employeeRepository.save(employeeEntity);
        return employee;
    }
}
