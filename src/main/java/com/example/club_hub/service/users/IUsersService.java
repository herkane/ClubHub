package com.example.club_hub.service.users;



import com.example.club_hub.model.XUser;

import java.util.List;


public interface IUsersService {

    XUser addUser(XUser user);

    void deleteUser(Long id);

    List<XUser> getAllUsers();

    XUser getUserById(Long id);

    XUser getUserByEmail(String email);

}