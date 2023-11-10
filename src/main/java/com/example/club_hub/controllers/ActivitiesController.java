package com.example.club_hub.controllers;

import com.example.club_hub.model.Activity;
import com.example.club_hub.model.XUser;
import com.example.club_hub.service.activities.ActivitiesService;
import com.example.club_hub.service.users.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/activities")
@CrossOrigin(origins = "http://localhost:4200")
public class ActivitiesController {

    @Autowired
    private ActivitiesService activitiesService;

    @Autowired
    private UsersService usersService;

    @GetMapping("")
    public List<Activity> getActivities() {
        return activitiesService.getAllActivities();
    }

    @GetMapping("/get/{id}")
    public Activity getActivity(@PathVariable Long id) {
        return activitiesService.getActivityById(id);
    }

    @PostMapping("/add")
    public Activity addActivity(@RequestBody Activity activity) {
        return activitiesService.addActivity(activity);
    }

    @DeleteMapping("/delete")
    public void deleteActivity(@RequestParam Long id) {
        activitiesService.deleteActivity(id);
    }

    @PutMapping("/update/{id}")
    public Activity updateActivity(@PathVariable Long id, @RequestBody Activity activity) {
        return activitiesService.updateActivity(activity, id);
    }

    //TODO Participate : id activite , participate counter ++, save databse
    @PutMapping("/participate")
    public ResponseEntity<?> participateActivity(@RequestParam Long id, @RequestParam Long userId) {
        Activity activity = activitiesService.getActivityById(id);
        if (activity.getParticipantsLimit() > activity.getParticipantsNumber()) {
            activity.getMembers().add(usersService.getUserById(userId));
            activity.setMembers(activity.getMembers());
            return ResponseEntity.status(HttpStatus.OK).body(activitiesService.incrementActivity(id));
        } else return ResponseEntity.status(403).body("Participants limit reached");
    }

    //TODO Cancel Participate : id activite , participate counter --, save databse
    @PutMapping("/cancelparticipate/{id}")
    public Activity CancelParticipateActivity(@PathVariable Long id) {
        return activitiesService.decrementActivity(id);
    }
}