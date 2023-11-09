package com.example.club_hub.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class XUser {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String email;
    private String fullName;
    private String password;
    private String phoneNumber;
    @Lob
    private String image;
    @ElementCollection(fetch = FetchType.EAGER)
    private List<Roles> roles;
    @ManyToMany(mappedBy = "members")
    private List<Activity> activities = new ArrayList<>();

    public XUser(String email, String nom, List<Roles> role) {
        this.email = email;
        this.fullName = nom;
        this.roles = role;
    }
}