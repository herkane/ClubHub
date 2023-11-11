package com.example.club_hub.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.management.relation.Role;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class XUser {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(unique = true)
    private String email;
    private String fullName;
    private String password;
    private String phoneNumber;
    @Lob
    private String image;
    @ElementCollection(fetch = FetchType.EAGER)
    private Set<Roles> roles;

    public void addRole(Roles role) {
        if (this.roles == null)
            this.roles = new HashSet<>();
        this.roles.add(role);
    }

    public void removeRole(Roles role) {
        if (this.roles == null)
            this.roles = new HashSet<>();
        this.roles.remove(role);
    }

    public void replaceRole(List<Roles> roles) {
        if (this.roles == null)
            this.roles = new HashSet<>();
        //empty all the roles
        this.roles.clear();
        //add the new roles
        this.roles.addAll(roles);
    }


    public XUser(String email, String nom, Set<Roles> role) {
        this.email = email;
        this.fullName = nom;
        this.roles = role;
    }


}