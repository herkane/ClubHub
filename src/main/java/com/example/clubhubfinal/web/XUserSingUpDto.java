package com.example.clubhubfinal.web;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;



@Data
@NoArgsConstructor
@AllArgsConstructor
public class XUserSingUpDto {

    private String username;
    private List<String> roles;
    private String password ;

}