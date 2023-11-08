package com.example.club_hub.controllers;

import com.example.club_hub.model.Roles;
import com.example.club_hub.model.XUser;
import com.example.club_hub.service.users.IUsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/users")
public class XUsersController {

    @Autowired
    private IUsersService usersService;
    //private IUsersService usersService;
    //private IUsersService usersService;
    //private IUsersService usersService;
    //private IUsersService usersService;

    @GetMapping("/members")
    public List<XUser> getMembers() {
        return usersService.getAllUsers();
    }

    @PostMapping("/add")
    public XUser addUser(@RequestBody XUser user) {
        return usersService.addUser(user);
    }

    @PutMapping("/update")
    public XUser updateUser(@RequestBody XUser user) {
        return usersService.updateUser(user);
    }

    @PutMapping("/licenicer")
    public XUser fireUser(@RequestBody XUser user) {
        user.setRoles(List.of(Roles.VISITOR));
        return usersService.updateUser(user);
    }
}
