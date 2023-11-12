package com.example.clubhubfinal.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserSignUp {
    private String email;
    private String password;
    private String fullName;
    private String phoneNumber;
    private String image;
}
