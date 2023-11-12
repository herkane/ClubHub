package com.example.clubhubfinal.repository;

import com.example.clubhubfinal.model.Activity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Repository
@Transactional
public interface ActivitiesRepository extends JpaRepository<Activity, Long> {
    List<Activity> findAllByStatus(String status);
}
