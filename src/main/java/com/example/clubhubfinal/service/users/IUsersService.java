package com.example.clubhubfinal.service.users;



import com.example.clubhubfinal.model.Roles;
import com.example.clubhubfinal.model.XUser;

import java.util.List;


public interface IUsersService {

    XUser addUser(XUser user);

    void deleteUser(Long id);

    List<XUser> getAllUsers();

    XUser getUserById(Long id);

    XUser getUserByEmail(String email);

    List<XUser> getUsersByRole(Roles role);

}