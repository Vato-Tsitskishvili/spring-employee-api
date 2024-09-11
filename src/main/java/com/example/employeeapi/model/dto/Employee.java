package com.example.employeeapi.model.dto;

public record Employee(
        long id,
        String firstName,
        String lastName,
        String emailId
) {
}
