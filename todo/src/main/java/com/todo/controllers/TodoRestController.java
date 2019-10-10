package com.todo.controllers;

import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.json.JacksonJsonParser;
import org.springframework.boot.json.JsonParser;
import org.springframework.boot.json.JsonParserFactory;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.todo.model.Task;
import com.todo.model.User;
import com.todo.services.TodoService;
import com.todo.services.UserService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TodoRestController {

	@Autowired
	private TodoService service;
	
	@Autowired
	private UserService userService;

	@PostMapping(path = "/todo/register")
	public void register(@RequestBody User user) {
			userService.createUser(user);
	}
	
	@PostMapping(path = "/todo/login")
	public User login(@RequestBody String jsonString) {
		JsonParser springParser = JsonParserFactory.getJsonParser();
		Map<String, Object> map = springParser.parseMap(jsonString);
		String username = (String) map.get("username");
		String password = (String) map.get("password");
		System.out.println(username + password);
		User user = userService.getUserFromUsernameAndPassword(username, password);
//		if (userService.getUserFromUsernameAndPassword(user.getUsername(), user.getPassword()) != null) {
//			return true;
//		}else {
//			return false;
//		}
		
		return user;
	}
	
	@GetMapping(path = "todo/getTasks")
	public List<Task> getAllTasks() {
		return service.getAll();
	}

	@PostMapping(path = "todo/createTask")
	public void createTask(@RequestBody Task task) {
//		task.setDate(new Date());
		service.createTask(task);
	}

	@GetMapping(path = "todo/{id}")
	public Task getTask(@PathVariable int id) {
		return service.getTaskFromId(id);
	}

	@PutMapping(path = "todo/updateTask/{id}")
	public Task updateTask(@PathVariable int id, @RequestBody Task task) {
		Task updatedTask = service.updateTask(task);
		return updatedTask;
	}

	@DeleteMapping("todo/deleteTask/{id}")
	public void deleteTask(@PathVariable int id) {
		service.deleteTask(id);
	}

	public String get() {
		return "Hello JUnit 5";
	}
}
