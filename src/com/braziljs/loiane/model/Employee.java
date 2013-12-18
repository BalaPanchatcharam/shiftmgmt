package com.braziljs.loiane.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.codehaus.jackson.annotate.JsonAutoDetect;

/**
 * Contact POJO
 * 
 * Sample project presented at BrazilJS
 * Brazilian JavaScript Conference
 * Fortaleza - Ceará - 13-14 May 2011
 * http://braziljs.com.br/2011
 * 
 * @author Loiane Groner
 * http://loianegroner.com (English)
 * http://loiane.com (Portuguese)
 */
@JsonAutoDetect
@Entity
@Table(name="EMPLOYEE")
public class Employee {
	
	@Id
	@GeneratedValue
	@Column(name="empid")
	private long id;
	
	@Column(name="name", nullable=false)
	private String name;
	
	@Column(name="msid", nullable=false)
	private String msid;
	
	@Column(name="task")
	private String task;
	
	private String msm;
	private String bau;
	private String bill;
	
	@Column(name="pick_loc")
	private String pickLoc;
	
	@Column(name="drop_loc")
	private String dropLoc;
	
	private Boolean active;
	private long won;
	
	public long getId() {
		return id;
	}
	public long getWon() {
		return won;
	}
	public void setId(long id) {
		this.id = id;
	}
	public void setWon(long id) {
		this.won = id;
	}

	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public String getMsid() {
		return msid;
	}
	
	public void setMsid(String msid) {
		this.msid = msid;
	}
	
	public String getTask() {
		return task;
	}
	
	public void setTask(String task) {
		this.task = task;
	}
	
	public String  getMsm() {
		return msm;
	}
	
	public void setId(String id) {
		this.msm = id;
	}
	
	public String  getBau() {
		return bau;
	}
	
	public void setBau(String param) {
		this.bau = param;
	}
	
	public String  getBill() {
		return bill;
	}
	
	public void setBill(String param) {
		this.bill = param;
	}
	
	public String  getPickLoc() {
		return pickLoc;
	}
	
	public void setPickLoc(String param) {
		this.pickLoc = param;
	}
	
	public String  getDropLoc() {
		return pickLoc;
	}
	
	public void setDropLoc(String param) {
		this.dropLoc = param;
	}
	
	public Boolean  getActive() {
		return active;
	}
	
	public void setAcive(Boolean param) {
		this.active = param;
	}
}
