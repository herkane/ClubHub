package com.example.club_hub.repository;

import com.example.club_hub.model.Roles;
import com.example.club_hub.model.XUser;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.management.relation.Role;
import java.util.List;
import java.util.Optional;

@Repository
@Transactional
public interface XUserRepository extends JpaRepository<XUser, Long> {

    Optional<XUser> findByEmail(String email);


}