package com.example.clubhubfinal.security;

import com.example.clubhubfinal.model.XUser;
import com.example.clubhubfinal.repository.XUserRepository;
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
        XUser user = xUserRepository.findByEmail(username).orElseThrow(() -> {
            throw new UsernameNotFoundException("User '" + username + "' not found");
        });
        var authorites = user.getRoles().stream().map((role) -> {
            return new SimpleGrantedAuthority(role.name());
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