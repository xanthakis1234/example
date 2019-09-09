package com.todo.services;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.todo.model.Task;
import com.todo.repository.TaskRepository;

@Service
public class TodoService {
	
	@Autowired
	private TaskRepository taskRepository;
	

	private static List<Task> listOfTasks = new ArrayList();
	private static int id = 0;
	
	static {
		listOfTasks.add(new Task(++id, "Learn Guitar", new Date(), false));
		listOfTasks.add(new Task(++id,  "Learn Angular", new Date(), false));
		listOfTasks.add(new Task(++id,  "Learn Spring", new Date(), false));
	}

	public List<Task> getAll() {
		return taskRepository.findAll();
	}	
	
	public int getTaskIndex(int indexOfTask) {
		int taskIndex = listOfTasks.indexOf(indexOfTask);
		return taskIndex;
	}

	public void createTask(Task task) {
		taskRepository.save(task);		
	}

	public Task getTaskFromId(int id) {
		return taskRepository.findById(id).get();
	}
	
	public Task getTaskFromId1(int id) {
		for (Task task : listOfTasks) {
			if (task.getId() == id) {
				return task;		
			}
		}
		return null;
	}
	
	public Task updateTask(Task task) {
		deleteTask(task.getId());
		listOfTasks.add(task);
		return task;
	} 

	public void deleteTask(int id) {
		Task task = getTaskFromId(id);
		listOfTasks.remove(task);		
	}
}
