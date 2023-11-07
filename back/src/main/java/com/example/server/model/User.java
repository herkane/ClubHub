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
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
  @Id
  @GeneratedValue(strategy = AUTO)
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
  @OneToOne
  @JoinColumn(name = "candidature_id")
  private Candidatures candidatures;

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

  public void viewActivity() {
    // Implement the viewActivity method
  }
}
