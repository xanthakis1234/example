package com.todo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.todo.model.User;
import com.todo.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	public void createUser(User user) {
		userRepository.save(user);		
	}
	
	public User getUserFromId(int id) {
		return userRepository.findById(id).get();
	}
	
	
}
