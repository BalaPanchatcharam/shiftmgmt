package com.shiftmgmt.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.shiftmgmt.dao.EmployeeDAO;
import com.shiftmgmt.model.Employee;

/**
 * Employee Service
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
@Service
public class EmployeeService {
	
	private EmployeeDAO employeeDAO;

	/**
	 * Get all contacts
	 * @return
	 */
	@Transactional(readOnly=true)
	public List<Employee> getEmployeeList(long won, Date wkdate, int start, int limit){
		System.out.println("WON : " + won + " wkdate:" + wkdate + " start:" + start + " limit"+ limit);
		return employeeDAO.getEmployees(start, limit);
	}
	
	/**
	 * Create new Employee/Employees
	 * @param data - json data from request
	 * @return created contacts
	 */
	@Transactional
	public List<Employee> create(Employee contact){
		
        List<Employee> newEmployees = new ArrayList<Employee>();
		
		//newEmployees.add(employeeDAO.saveEmployee(contact));
		
		return newEmployees;
	}
	
	
	/**
	 * Update contact/contacts
	 * @param data - json data from request
	 * @return updated contacts
	 */
	@Transactional
	public List<Employee> update(Employee contact){
		
		List<Employee> returnEmployees = new ArrayList<Employee>();
		
		//returnEmployees.add(employeeDAO.saveEmployee(contact));
		
		return returnEmployees;
	}
	
	/**
	 * Delete contact/contacts
	 * @param contact - json data from request
	 */
	@Transactional
	public void delete(Employee contact){
		
		//employeeDAO.deleteEmployee(contact.getId());
	}
	
	/**
	 * Get total of Employees from database.
	 * Need to set this value on ExtJS Store
	 * @return
	 */
	public int getTotalEmployees(long won, Date wkdate){

		return employeeDAO.getTotalEmployees(won, wkdate);
	}

	/**
	 * Spring use - DI
	 * @param employeeDAO
	 */
	@Autowired
	public void setEmployeeDAO(EmployeeDAO employeeDAO) {
		this.employeeDAO = employeeDAO;
	}
	
}
