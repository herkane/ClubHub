package com.example.server.model;

import com.example.server.enumeration.Roles;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

import static jakarta.persistence.GenerationType.AUTO;

@Entity(name="User")
@NoArgsConstructor
@AllArgsConstructor
public class User {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;
  @Column
  private String email;
  @Column
  private String nom;
  @Column
  private String prenom;
  @Column
  @Enumerated(EnumType.STRING)
  private Roles role;
  @ManyToMany(mappedBy = "membres")
  private List<Activites> activites = new ArrayList<>();
  @OneToOne(cascade = CascadeType.ALL)
  @JoinColumn(name = "user_id", referencedColumnName = "id")
  private Candidatures candidatures;


  public User(Long id, String email, String nom, String prenom, Roles role) {
    this.id = id;
    this.email = email;
    this.nom = nom;
    this.prenom = prenom;
    this.role = role;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getNom() {
    return nom;
  }

  public void setNom(String nom) {
    this.nom = nom;
  }

  public String getPrenom() {
    return prenom;
  }

  public void setPrenom(String prenom) {
    this.prenom = prenom;
  }

  public Roles getRole() {
    return role;
  }

  public void setRole(Roles role) {
    this.role = role;
  }

  public List<Activites> getActivites() throws Exception {
    if(this.role == Roles.VISITOR ){
      throw new Exception("Not allowed");
    }
    return this.activites;
  }
  public Candidatures getCandidatures() throws Exception {
    if(this.role != Roles.VISITOR){
      throw new Exception("Not allowed");
    }
    return this.candidatures;
  }

}
