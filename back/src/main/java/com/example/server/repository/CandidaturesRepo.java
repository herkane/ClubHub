package com.example.server.repository;

import com.example.server.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CandidaturesRepo extends JpaRepository<User, Long> {
}
