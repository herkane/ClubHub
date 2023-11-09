package com.example.club_hub.service.activities;


import com.example.club_hub.model.Activity;

import java.util.List;


public interface IActivitiesService {
    Activity addActivity(Activity activity);
    Activity updateActivity(Activity activity, Long id);
    void deleteActivity(Long id);
    List<Activity> getAllActivities();
    Activity getActivityById(Long id);
    Activity incrementActivity(Long id);
    Activity decrementActivity(Long id);


}