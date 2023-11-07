package com.example.server.web;

import com.example.server.enumeration.Roles;
import com.example.server.model.User;
import com.example.server.repository.UserRepo;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@RestController
@RequestMapping("/api")
public class UserController {

  @Autowired
  UserRepo dao;

  @PostConstruct
  public void init() {
    System.out.println("Start " + this);
    if (dao.count() == 0) {
      dao.save(new User(1L,"yh@gmail.com", "H", "Y", Roles.VIP));
    }
  }

  @GetMapping (value = "/users")
  private List<User> getUsers() {
    return dao.findAll();
  }
}
