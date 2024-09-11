package com.example.employeeapi.exceptions;

public class EmployeeExistsException extends RuntimeException {

    public EmployeeExistsException(String message) {
        super(message);
    }
}
