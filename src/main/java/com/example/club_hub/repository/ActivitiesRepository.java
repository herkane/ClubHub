package com.example.club_hub.repository;

import com.example.club_hub.model.Activity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;


@Repository
@Transactional
public interface ActivitiesRepository extends JpaRepository<Activity, Long> {

}
