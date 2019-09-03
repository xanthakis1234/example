package com.todo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.todo.model.Task;
import com.todo.services.TodoService;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class TodoRestController {
	
	@Autowired
	private TodoService service;
	
	@GetMapping(path="/todo/hello")
	public String hello () {
		return "ALOXA";
	}

	@GetMapping(path="todo/getall")
	public List<Task> getTasks() {
		return service.getAll();
	}
}
