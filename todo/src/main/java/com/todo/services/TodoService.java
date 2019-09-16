package com.todo.services;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.todo.model.Task;
import com.todo.repository.TaskRepository;

@Service
public class TodoService {
	
	@Autowired
	private TaskRepository taskRepository;

	public List<Task> getAll() {
		return taskRepository.findAll();
	}	
	
	public void createTask(Task task) {
		LocalDateTime newDate = LocalDateTime.now();
		DateTimeFormatter dateFormat = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
		task.setDate(newDate.format(dateFormat));
		taskRepository.save(task);		
	}

	public Task getTaskFromId(int id) {
		return taskRepository.findById(id).get();
	}
	
	public void deleteTask(int id) {
		taskRepository.deleteById(id);
	}
	public Task updateTask(Task task) {
		LocalDateTime newDate = LocalDateTime.now();
		DateTimeFormatter dateFormat = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
		task.setDate(newDate.format(dateFormat));
		taskRepository.save(task);
		Task updatedTask = task;
		return updatedTask;
	}
}
