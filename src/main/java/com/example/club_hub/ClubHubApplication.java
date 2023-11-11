package com.example.club_hub;

import com.example.club_hub.model.Roles;
import com.example.club_hub.model.XUser;
import com.example.club_hub.service.users.UsersService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
public class ClubHubApplication {

    public static void main(String[] args) {
        SpringApplication.run(ClubHubApplication.class, args);
    }

    @Bean
    CommandLineRunner commandLineRunner(UsersService userService
            , PasswordEncoder passwordEncoder) {
        return args -> {

            // creating the SuperAdmin Organizer
            // this admin should have all the roles
            XUser admin = XUser
                    .builder()
                    .fullName("Admin Admin")
                    .email("admin@admin.com")
                    .roles(List.of(Roles.ADMIN, Roles.VIP, Roles.MEMBER))
                    .phoneNumber("01234567890")
                    .password(passwordEncoder.encode("admin"))
                    .build();
            userService.addUser(admin);
            XUser vip = XUser
                    .builder()
                    .fullName("Vip Vip")
                    .email("vip@vip.com")
                    .roles(List.of(Roles.VIP, Roles.MEMBER))
                    .phoneNumber("01234567890")
                    .password(passwordEncoder.encode("vip"))
                    .build();
            XUser candidate = XUser
                    .builder()
                    .fullName("Candidate Candidate")
                    .email("candidate@candidate.com")
                    .roles(List.of(Roles.CANDIDATE))
                    .phoneNumber("01234567890")
                    .password(passwordEncoder.encode("candidate"))
                    .build();
            userService.addUser(admin);
            userService.addUser(vip);
            userService.addUser(candidate);
            System.out.println("admin seeded, email: " + admin.getEmail() + " password: " + admin.getPassword());
        };
    }


}
