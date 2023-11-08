package com.example.club_hub.repository;

import com.example.club_hub.model.XUser;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
@Transactional
public interface XUserRepository extends JpaRepository<XUser, String> {

}