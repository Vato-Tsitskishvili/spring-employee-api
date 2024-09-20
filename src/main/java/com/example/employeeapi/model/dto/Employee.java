package com.example.employeeapi.model.dto;

import jakarta.persistence.Column;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record Employee(
        @Column(nullable = false)
        long id,

        @NotBlank
        @Column(nullable = false)
        String firstName,

        @NotBlank
        @Column(nullable = false)
        String lastName,

        @Email
        @NotBlank
        @Column(nullable = false)
        String email
) {
}
