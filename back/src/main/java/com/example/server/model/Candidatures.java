package com.example.server.model;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity(name="Candidature")
public class Candidatures {
  @Id
  private Long id;
  private String motivation;
  @OneToOne(mappedBy = "person", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
  private User visitor;

}
