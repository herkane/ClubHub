package com.example.club_hub.service.activities;

import com.example.club_hub.model.Activity;
import com.example.club_hub.repository.ActivitiesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ActivitiesService implements IActivitiesService{

    @Autowired
    private ActivitiesRepository activitiesRepository;


    @Override
    public Activity addActivity(Activity activity) {
        return activitiesRepository.save(activity);
    }

    @Override
    public Activity updateActivity(Activity activity, Long id) {
        Activity act = activitiesRepository.findById(id).orElseThrow(() -> new RuntimeException("Activity not found for id :: " + id));
        act.setId(activity.getId());
        act = activity;
        return activitiesRepository.save(act);
    }

    @Override
    public void deleteActivity(Long id) {
        activitiesRepository.deleteById(id);
    }

    @Override
    public List<Activity> getAllActivities() {
        return activitiesRepository.findAll();
    }

    @Override
    public Activity getActivityById(Long id) {
        Optional<Activity> optional = activitiesRepository.findById(id);
        Activity activity = null;
        if(optional.isPresent()){
            activity = optional.get();
        }else{
            throw new RuntimeException("Activity not found for id :: " + id);
        }
        return activity;
    }
    @Override
    public Activity incrementActivity(Long id){
        Activity act = activitiesRepository.findById(id).orElseThrow(() -> new RuntimeException("Activity not found for id :: " + id));
        act.setParticipantsNumber(act.getParticipantsNumber()+1);
        return activitiesRepository.save(act);
    };
    @Override
    public Activity decrementActivity(Long id){
        Activity act = activitiesRepository.findById(id).orElseThrow(() -> new RuntimeException("Activity not found for id :: " + id));
        act.setParticipantsNumber(act.getParticipantsNumber()-1);
        return activitiesRepository.save(act);

    };

}
