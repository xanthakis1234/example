package com.todo.services;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.todo.model.Task;

@Service
public class TodoService {

	private static List<Task> listOfTasks = new ArrayList();
	private static int id = 0;
	
	static {
		listOfTasks.add(new Task(++id, "Learn Guitar", new Date(), false));
		listOfTasks.add(new Task(++id,  "Learn Angular", new Date(), false));
		listOfTasks.add(new Task(++id,  "Learn Spring", new Date(), false));
	}
	
	public List<Task> getTasks() {
		return listOfTasks;
	}
	
	public int getTaskIndex(int indexOfTask) {
		int taskIndex = listOfTasks.indexOf(indexOfTask);
		return taskIndex;
	}

	public void createTask(Task task) {
		listOfTasks.add(task);		
	}

	public void updateTask(int indexOfTask, Task task) {
		listOfTasks.set(indexOfTask, task);	
	}

	public void deleteTask(Task task) {
		listOfTasks.remove(task);		
	}
}
