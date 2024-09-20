package com.example.employeeapi.mapper;

import com.example.employeeapi.model.dto.Employee;
import com.example.employeeapi.model.entity.EmployeeEntity;

public final class EmployeeMapper {

    public static Employee mapEntityToDto(EmployeeEntity employeeEntity) {
        return new Employee(
                employeeEntity.getId(),
                employeeEntity.getFirstName(),
                employeeEntity.getLastName(),
                employeeEntity.getEmail()
        );
    }

    public static EmployeeEntity mapDtoToEntity(Employee employee) {
        return new EmployeeEntity(
                employee.firstName(),
                employee.lastName(),
                employee.email()
        );
    }
}
