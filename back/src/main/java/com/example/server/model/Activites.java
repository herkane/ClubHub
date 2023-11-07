package com.example.server.model;

import com.example.server.enumeration.Roles;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import static jakarta.persistence.GenerationType.AUTO;

@Entity(name="Activites")
public class Activites {
  @Id
  @GeneratedValue(strategy = AUTO)
  private Long id;
  @Column
  private String titre;
  @Column
  private String description;
  @Column
  private int nbPlaces;
  @Column
  private String image;
  @Column
  private Date LocalDate;
  @ManyToMany
  @JoinTable(
    name = "activite_membre",
    joinColumns = @JoinColumn(name = "activite_id"),
    inverseJoinColumns = @JoinColumn(name = "membre_id")
  )
  private List<User> membres = new ArrayList<>();
}
