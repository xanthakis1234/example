package com.todo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonBackReference;



@Entity
public class Task {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="idtask") // if differs from actual tableName in db must use @Column
	private int id;	
	private String description;
	private String date;	
	
	@ManyToOne
    @JoinColumn(name="iduser")
	private User user;
	
	public Task() {				
	}
	
	public Task(String description) {		
		this.description = description;
	}

	public Task(int id, String description, String date) {
		this.id = id;
		this.description = description;
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

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public User getUser() {
		return user;
	}
	
	@JsonBackReference
	public void setUser(User user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return "Task [id=" + id + ", description=" + description + ", date=" + date + ", user=" + user + "]";
	}


}
