package com.example.club_hub.service.users;

import com.example.club_hub.model.Roles;
import com.example.club_hub.model.XUser;
import com.example.club_hub.model.dto.UserSignUp;
import com.example.club_hub.repository.XUserRepository;
import com.example.club_hub.security.JwtProvider;
import com.example.club_hub.security.MyJwtException;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
@Transactional
public class UsersService implements IUsersService{

    @Autowired
    private XUserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtProvider jwtTokenProvider;

    @Autowired
    private AuthenticationManager authenticationManager;


    @Override
    public XUser addUser(XUser user) {
        return userRepository.save(user);
    }

    public XUser update(Long userId) {
        XUser user = userRepository.findById(userId).get();
        user.setRoles(Set.of(Roles.MEMBER));
        return userRepository.save(user);
    }

    @Override
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    @Override
    public List<XUser> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public XUser getUserById(Long id) {
        Optional<XUser> optional = userRepository.findById(id);
        XUser user = null;
        if(optional.isPresent()){
            user = optional.get();
        }else{
            throw new RuntimeException("User not found for id :: " + id);
        }
        return user;
    }

    @Override
    public XUser getUserByEmail(String email) {
        Optional<XUser> optional = userRepository.findByEmail(email);
        XUser user = null;
        if(optional.isPresent()){
            user = optional.get();
        }else{
            throw new RuntimeException("User not found for email :: " + email);
        }
        return user;
    }

    @Override
    public List<XUser> getUsersByRole(Roles role) {
        return userRepository.findByRoles(role);
    }

    public String login(String username, String password) {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
            var user = userRepository.findByEmail(username).get();
            System.out.println(user);
            return jwtTokenProvider.createToken(user);
        } catch (AuthenticationException e) {
            throw new MyJwtException("Invalid username/password supplied", HttpStatus.UNPROCESSABLE_ENTITY);
        }
    }

    public XUser signup(XUser user) {
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            throw new MyJwtException("Email is already in use", HttpStatus.UNPROCESSABLE_ENTITY);
        }
        user.setRoles(Set.of(Roles.CANDIDATE));
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    public void delete(String username) {
        userRepository.deleteById(search(username).getId());
    }

    public XUser search(String username) {
        return userRepository.findByEmail(username)
                .orElseThrow(() -> new MyJwtException("The user doesn't exist", HttpStatus.NOT_FOUND));
    }

    public XUser whoami(HttpServletRequest req) {
        return search(jwtTokenProvider.getUsername(jwtTokenProvider.resolveToken(req)));
    }

    public String refresh(String username) {
        return jwtTokenProvider.createToken(userRepository.findById(search(username).getId()).get());
    }
}
