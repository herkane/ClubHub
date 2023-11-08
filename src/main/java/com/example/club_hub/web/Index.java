package com.example.club_hub.web;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/index")
public class Index {
    @GetMapping("/open")
    public  String open(){
        return "open" ;
    }
    @GetMapping("/close")
    @PreAuthorize("isAuthenticated()")
    public  String close(){
        return "if you are seing this you are authenticated " ;
    }
}
