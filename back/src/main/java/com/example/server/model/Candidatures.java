package com.example.server.model;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity(name="Candidature")
public class Candidatures {
  @Id
  private Long id;
  @Column
  private String motivation;
  @OneToOne(mappedBy = "candidatures")
  private User user;



}
