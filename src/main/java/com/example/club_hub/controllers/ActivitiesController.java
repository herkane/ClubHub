package com.example.club_hub.controllers;

import com.example.club_hub.model.Activity;
import com.example.club_hub.service.activities.ActivitiesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/activities")
public class ActivitiesController {

    @Autowired
    private ActivitiesService activitiesService;

    @GetMapping("/all")
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

    @DeleteMapping("/delete/{id}")
    public void deleteActivity(@PathVariable Long id) {
        activitiesService.deleteActivity(id);
    }

    @PutMapping("/update/{id}")
    public Activity updateActivity(@PathVariable Long id, @RequestBody Activity activity) {
        return activitiesService.updateActivity(activity, id);
    }
}
