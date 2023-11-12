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
import java.util.Set;

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
        user.setRoles(Set.of(Roles.CANDIDATE));
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
            user.replaceRole(List.of(Roles.MEMBER));
            return ResponseEntity.status(HttpStatus.OK).body(usersService.addUser(user));
        }
        else if (action.equals("refuse")){
            usersService.deleteUser(user.getId());
            return ResponseEntity.status(HttpStatus.OK).build();
        } else if (action.equals("fire")){
            user.replaceRole(List.of(Roles.CANDIDATE));
            return ResponseEntity.status(HttpStatus.OK).body(usersService.addUser(user));
        } else if (action.equals("promote")){
            user.replaceRole(List.of(Roles.MEMBER, Roles.VIP) );
            return ResponseEntity.status(HttpStatus.OK).body(usersService.addUser(user));
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @GetMapping("/findUsersByRole")
    public List<XUser> findUsersByRole(@RequestParam Roles role) {
        return usersService.getUsersByRole(role);
    }
}
