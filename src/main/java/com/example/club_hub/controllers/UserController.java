package com.example.club_hub.controllers;

import com.example.club_hub.model.XUser;
import com.example.club_hub.model.dto.UserSignUp;
import com.example.club_hub.service.users.UsersService;
import com.example.club_hub.web.XUserDTO;
import jakarta.servlet.http.HttpServletRequest;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

/**
 * L'API d'authentification
 */
@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

	@Autowired
	private UsersService userService;

	private ModelMapper modelMapper = new ModelMapper();

	/**
	 * Authentification et récupération d'un JWT
	 */
	@PostMapping("/login")
	public ResponseEntity<?> login(//
								@RequestParam String email, //
								@RequestParam String password) {
		HashMap<String, String> map = new HashMap<>();
		map.put("token",userService.login(email, password));
		return ResponseEntity.ok(map);
	}

	/**
	 * Ajouter un utilisateur
	 */
	@PostMapping("/signup")
	public XUser signup(@RequestBody UserSignUp user) {
		System.out.println("signup " + user.getEmail());
		return userService.signup(modelMapper.map(user, XUser.class));
	}

	/**
	 * Supprimer un utilisateur
	 */
	@DeleteMapping("/{username}")
	@PreAuthorize("hasAuthority('ADMIN')")
	public String delete(@PathVariable String username) {
		System.out.println("delete " + username);
		userService.delete(username);
		return username;
	}

	/**
	 * Récupérer des informations sur un utilisateur
	 */
	@GetMapping("/{username}")
	@PreAuthorize("hasAuthority('ADMIN')")
	public XUserDTO search(@PathVariable String username) {
		return modelMapper.map(userService.search(username), XUserDTO.class);
	}

	/**
	 * Récupérer des informations sur l'utilisateur courant
	 */
	@GetMapping(value = "/me")
	@PreAuthorize("hasAuthority('ADMIN') or hasAuthority('USER')")
	public XUserDTO whoami(HttpServletRequest req) {
		return modelMapper.map(userService.whoami(req), XUserDTO.class);
	}

	/**
	 * Récupérer un nouveau JWT
	 */
	@GetMapping("/refresh")
	@PreAuthorize("hasAuthority('ADMIN') or hasAuthority('USER')")
	public String refresh(HttpServletRequest req) {
		return userService.refresh(req.getRemoteUser());
	}

}
