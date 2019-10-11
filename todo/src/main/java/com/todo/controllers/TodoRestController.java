package com.todo.controllers;

import java.util.List;
import java.util.Map;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.json.JsonParser;
import org.springframework.boot.json.JsonParserFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.todo.dto.LoginDTO;
import com.todo.dto.UserDTO;
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
	public ResponseEntity<?> login(@RequestBody String jsonString){
		
		JsonParser springParser = JsonParserFactory.getJsonParser();
		Map<String, Object> map = springParser.parseMap(jsonString);
		LoginDTO loginDTO = new LoginDTO();	
		loginDTO.setUsername((String) map.get("username"));
		loginDTO.setPassword((String) map.get("password"));
		System.out.println("Credentials : " + loginDTO.getUsername() + "  " + loginDTO.getPassword());
		User user = userService.getUserFromUsernameAndPassword(loginDTO.getUsername(), loginDTO.getPassword());
		if (user != null) {
			ModelMapper modelMapper = new ModelMapper();
			UserDTO userDTO = modelMapper.map(user, UserDTO.class);
			return new ResponseEntity<UserDTO>(userDTO, HttpStatus.OK);
		}else {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
		}
		
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
