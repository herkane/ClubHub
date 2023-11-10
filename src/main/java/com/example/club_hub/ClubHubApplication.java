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
            ArrayList<Roles> AdminRoles = new ArrayList<>();
            AdminRoles.add(Roles.ADMIN);
            AdminRoles.add(Roles.VIP);
            AdminRoles.add(Roles.MEMBER);
            XUser admin = XUser
                    .builder()
                    .fullName("Admin Admin")
                    .email("admin@admin.com")
                    .roles(AdminRoles)
                    .phoneNumber("01234567890")
                    .password(passwordEncoder.encode("admin"))
                    .build();
            userService.addUser(admin);
            System.out.println("admin seeded, email: " + admin.getEmail() + " password: " + admin.getPassword());
        };
    }


}
