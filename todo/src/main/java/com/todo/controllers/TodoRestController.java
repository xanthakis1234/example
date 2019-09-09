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

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class TodoRestController {
	
	@Autowired
	private TodoService service;
	
	@GetMapping(path="/todo/hello")
	public String hello () {
		return "ALOXA";
	}

/*	@GetMapping(path="todo/getTasks")
	public List<Task> getTasks() {
		return service.getTasks();
	}*/
	
	@GetMapping(path="todo/getTasks")
	public List<Task> getAllTasks() {
		return service.getAll();

	}	
	
	@PostMapping(path="todo/createTask")
	public void createTask(@RequestBody Task task) {
		
		 service.createTask(task);
	}
	
	@GetMapping(path="todo/getTaskIndex")
	public int getTaskIndex(int indexOfTask) {
		return service.getTaskIndex(indexOfTask);
	}
	
	@GetMapping(path="todo/{id}")
	public Task getTask(@PathVariable int id) {
		return service.getTaskFromId(id);
	}
	
	/*@PostMapping(path="todo/createTask")
	public void createTask(@RequestBody Task task) {
		service.createTask(task);
	}*/	
	
	@PutMapping(path="todo/updateTask/{id}")
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
