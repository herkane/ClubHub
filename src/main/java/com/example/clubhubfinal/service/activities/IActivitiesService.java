package com.example.clubhubfinal.service.activities;


import com.example.clubhubfinal.model.Activity;

import java.util.List;


public interface IActivitiesService {
    Activity addActivity(Activity activity);
    Activity updateActivity(Activity activity, Long id);
    void deleteActivity(Long id);
    List<Activity> getAllActivities(String status);
    Activity getActivityById(Long id);
    Activity incrementActivity(Activity activity);
    Activity decrementActivity(Activity activity);


}