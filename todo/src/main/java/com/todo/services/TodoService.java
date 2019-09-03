package com.todo.services;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.todo.model.Task;

@Service
public class TodoService {

	private static List<Task> todos = new ArrayList();
	private static int id = 0;
	
	static {
		todos.add(new Task(++id, "Learn Guitar", new Date(), false));
		todos.add(new Task(++id,  "Learn Angular", new Date(), false));
		todos.add(new Task(++id,  "Learn Spring", new Date(), false));
	}
	
	public List<Task> getAll() {
		return todos;
	}

}
