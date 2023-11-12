package com.example.clubhubfinal.controllers;

import com.example.clubhubfinal.model.Activity;
import com.example.clubhubfinal.model.Roles;
import com.example.clubhubfinal.model.XUser;
import com.example.clubhubfinal.service.activities.ActivitiesService;
import com.example.clubhubfinal.service.users.UsersService;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/api/activities")
@CrossOrigin(origins = "http://localhost:4200")
public class ActivitiesController {

    @Autowired
    private ActivitiesService activitiesService;

    @Autowired
    private UsersService usersService;

    @GetMapping("")
    public List<Activity> getActivities(@RequestParam String status) {
        return activitiesService.getAllActivities(status);
    }

    @GetMapping("/get")
    public Activity getActivity(@RequestParam Long postId) {
        return activitiesService.getActivityById(postId);
    }

    @PostMapping("/add")
    public Activity addActivity(@RequestBody Activity activity, @RequestParam Long userId) {
        Set<Roles> roles = usersService.getUserById(userId).getRoles();
        System.out.println(roles);
        if (roles.contains(Roles.ADMIN)) {
            activity.setStatus("ok");
        } else if (roles.contains(Roles.VIP)){
            activity.setStatus("pending");
        } else {
            activity.setStatus("pending");
        }
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

    @GetMapping("/isParticipating")
    public boolean isParticipating(@RequestParam Long id, @RequestParam Long userId) {
        Activity activity = activitiesService.getActivityById(id);
        XUser user = usersService.getUserById(userId);
        return activity.getMembers().contains(user);
    }

    //TODO Participate : id activite , participate counter ++, save databse
    @PutMapping("/participate")
    public ResponseEntity<?> participateActivity(@RequestParam Long id, @RequestParam Long userId) {
        Activity activity = activitiesService.getActivityById(id);
        XUser user = usersService.getUserById(userId);
        if (activity.getParticipantsLimit() > activity.getParticipantsNumber()) {
            List<XUser> members = activity.getMembers();
            members.add(user);
            activity.setMembers(members);
            return ResponseEntity.status(HttpStatus.OK).body(activitiesService.incrementActivity(activity));
        } else return ResponseEntity.status(403).body("Participants limit reached");
    }

    //TODO Cancel Participate : id activite , participate counter --, save databse
    @PutMapping("/cancel-participation")
    public ResponseEntity<?> CancelParticipateActivity(@RequestParam Long id, @RequestParam Long userId) {
        Activity activity = activitiesService.getActivityById(id);
        XUser user = usersService.getUserById(userId);
        List<XUser> members = activity.getMembers();
        members.remove(user);
        activity.setMembers(members);
        return ResponseEntity.status(HttpStatus.OK).body(activitiesService.decrementActivity(activity));
    }

    @PutMapping("/prove-or-refuse-activity")
    public ResponseEntity<?> ProveOrRefuseActivity(@RequestParam Long activityId, @RequestParam String action) {
        Activity activity = activitiesService.getActivityById(activityId);
        if (action.equals("accept")){
            activity.setStatus("ok");
        }
        else{
            activity.setStatus("Refused");
            activitiesService.deleteActivity(activityId);
            return ResponseEntity.status(HttpStatus.OK).body(null);
        }
        return ResponseEntity.status(HttpStatus.OK).body(activitiesService.updateActivity(activity, activityId));
    }

}