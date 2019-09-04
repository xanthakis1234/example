package com.todo.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.todo.model.Task;
import com.todo.services.TodoService;

@CrossOrigin(origins="http://localhost:4200", maxAge = 3600)
@RestController
public class TodoRestController {
	
	@Autowired
	private TodoService service;
	
	@GetMapping(path="/todo/hello")
	public String hello () {
		return "ALOXA";
	}

	@GetMapping(path="todo/getTasks")
	public List<Task> getTasks() {
		return service.getTasks();
	}
	
	@GetMapping(path="todo/getTaskIndex")
	public int getTaskIndex(int indexOfTask) {
		return service.getTaskIndex(indexOfTask);
	}
	
	@PostMapping(path="todo/createTask")
	public void createTask(@RequestBody Task task) {
		service.createTask(task);
	}	
	
	@GetMapping(path="todo/updateTask")
	public void updateTask(int indexOfTask,Task task) {		
		service.updateTask(indexOfTask, task);
	}
	
	@DeleteMapping("todo/deleteTask/{id}")
	public void deleteTask(@PathVariable int id) {
		service.deleteTask(id);
	}	
}
