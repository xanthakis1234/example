package com.todo.model;

import java.util.Date;

public class Todo {
	
	private long id;
	private String description;
	private boolean isDone;
	private Date date;
	
	public Todo(long id, String description, boolean isDone, Date date) {
		this.id = id;
		this.description = description;
		this.isDone = isDone;
		this.date = date;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
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
