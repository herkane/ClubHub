package com.example.club_hub.controllers;

import com.example.club_hub.model.Roles;
import com.example.club_hub.model.XUser;
import com.example.club_hub.model.dto.UserSignUp;
import com.example.club_hub.repository.XUserRepository;
import com.example.club_hub.service.users.IUsersService;
import com.example.club_hub.service.users.UsersService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:4200")
public class XUsersController {

    @Autowired
    private UsersService usersService;

    @Autowired
    private XUserRepository userRepository;

    private ModelMapper modelMapper = new ModelMapper();

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
        return usersService.addUser(user);
    }

    @PutMapping("/licenicer")
    public XUser fireUser(@RequestBody XUser user) {
        user.setRoles(List.of(Roles.CANDIDATE));
        return usersService.addUser(user);
    }

    @PostMapping("/signup")
    public XUser signup(@RequestBody XUser user) {
        System.out.println("signup " + user.getEmail());
        return usersService.signup(user);
    }

    @PutMapping("/approve-or-refuse-member")
    public ResponseEntity<?> approveOrRefuseCandidate(@RequestParam Long userId, @RequestParam String action) {
        XUser user = usersService.getUserById(userId);
        if (action.equals("accept")){
            user.setRoles(List.of(Roles.MEMBER));
            return ResponseEntity.status(HttpStatus.OK).body(usersService.addUser(user));
        }
        else{
            usersService.deleteUser(userId);
            return ResponseEntity.status(HttpStatus.OK).body(null);
        }

    }

}
