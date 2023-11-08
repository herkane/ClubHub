package com.example.club_hub.security;

import com.example.club_hub.model.XUser;
import com.example.club_hub.repository.XUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class JwtUserDetails implements UserDetailsService {
    @Autowired
    XUserRepository xUserRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        XUser user = xUserRepository.findById(username).orElseThrow(() -> {
            throw new UsernameNotFoundException("User '" + username + "' not found");
        });
        var authorites = user.getRoles().stream().map((role) -> {
            return new SimpleGrantedAuthority(role);
        }).toList();
        return org.springframework.security.core.userdetails.User//
                .withUsername(username)//
                .password(user.getPassword())//
                .authorities(authorites)//
                .accountExpired(false)//
                .accountLocked(false)//
                .credentialsExpired(false)//
                .disabled(false)//
                .build();
    }
}