package com.todo.model;

import java.util.Date;

public class Task {
	
	private int id;
	private String description;
	private boolean isDone;
	private Date date;
	
	
	
	public Task() {		
	}

	public Task(int id, String description, Date date, boolean isDone) {
		this.id = id;
		this.description = description;
		this.isDone = isDone;
		this.date = date;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public boolean isDone() {
		return isDone;
	}

	public void setDone(boolean isDone) {
		this.isDone = isDone;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	@Override
	public String toString() {
		return "Todo [id=" + id + ", description=" + description + ", isDone=" + isDone + ", date=" + date + "]";
	}
	
	

}
