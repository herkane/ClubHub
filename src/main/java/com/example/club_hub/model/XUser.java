package com.example.club_hub.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class XUser {

    @Id
    String userName;

    @Basic
    String password;

    @ElementCollection(fetch = FetchType.EAGER)
    Set<String> roles;
}