package com.example.employeeapi.service;

import com.example.employeeapi.exceptions.EmployeeNotFoundException;
import com.example.employeeapi.mapper.EmployeeMapper;
import com.example.employeeapi.model.dto.Employee;
import com.example.employeeapi.model.entity.EmployeeEntity;
import com.example.employeeapi.repository.EmployeeRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.swing.text.html.parser.Entity;
import java.util.ArrayList;
import java.util.List;

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

    public List<Employee> getAllEmployees() {
        List<EmployeeEntity> allEmployeeEntities = employeeRepository.findAll();
        return allEmployeeEntities.stream()
                .map(EmployeeMapper::mapEntityToDto)
                .toList();
    }

    public boolean deleteEmployeeById(long id) {
        EmployeeEntity employeeEntity = employeeRepository.findById(id)
                .orElseThrow(() -> new EmployeeNotFoundException("Employee with that id doesn't exist"));
        employeeRepository.delete(employeeEntity);

        return true;
    }

    public Employee getEmployeeById(long id) {
        EmployeeEntity employeeEntity = employeeRepository.findById(id)
                .orElseThrow(() -> new EmployeeNotFoundException("Employee with that id doesn't exist"));

        return EmployeeMapper.mapEntityToDto(employeeEntity);
    }

    public Employee updateEmployeeById(long id, Employee employee) {
        EmployeeEntity employeeEntity = employeeRepository.findById(id)
                .orElseThrow(() -> new EmployeeNotFoundException("Employee with that id doesn't exist"));
        employeeEntity.setFirstName(employee.firstName());
        employeeEntity.setLastName(employee.lastName());
        employeeEntity.setEmailId(employee.emailId());

        employeeRepository.save(employeeEntity);
        return employee;
    }
}
