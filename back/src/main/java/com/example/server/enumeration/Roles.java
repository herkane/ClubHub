package com.example.server.enumeration;

public enum Roles {
  ADMIN("ADMIN"),
  MEMBRE("MEMBRE"),
  VIP("VIP"),
  VISITOR("VISITOR");

  private final String role;

  Roles(String role){
    this.role = role;
  }

  public String getRole(){
    return this.role;
  }
}
