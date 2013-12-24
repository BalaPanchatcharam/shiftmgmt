package com.shiftmgmt.web;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.shiftmgmt.model.Employee;
import com.shiftmgmt.model.EmployeeWrapper;
import com.shiftmgmt.service.EmployeeService;
import com.shiftmgmt.util.ExtJSReturn;

/**
 * Controller - Spring
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
@Controller
public class EmployeeController  {

	private EmployeeService employeeService;
	
	@RequestMapping(value="/employee/view.action")
	public @ResponseBody Map<String,? extends Object> view(@RequestParam (value="won", required=false) Long won, @RequestParam(value="wkdate", required=false) @DateTimeFormat(pattern="yyyy-MM-dd") Date wkdate,
			                                                            @RequestParam int start, @RequestParam int limit) throws Exception {
		List<Employee> employees = new ArrayList<Employee>();
		System.out.println("Got here" + won + wkdate);

		try{
			if(won == null || wkdate == null) {
				System.out.println("Got here");
				return ExtJSReturn.mapOK1(employees, 0);
			}
			employees = employeeService.getEmployeeList(won, wkdate, start,limit);
			int total = employeeService.getTotalEmployees(won, wkdate);
			return ExtJSReturn.mapOK1(employees, total);

		} catch (Exception e) {

			return ExtJSReturn.mapError("Error retrieving Employees from database.");
		}
	}
	
	@RequestMapping(value="/employee/create.action")
	public @ResponseBody Map<String,? extends Object> create(@RequestBody EmployeeWrapper data) throws Exception {

		try{

			List<Employee> employees = new ArrayList<Employee>(); //employeeService.create(data.getData());

			return ExtJSReturn.mapOK(employees);

		} catch (Exception e) {

			return ExtJSReturn.mapError("Error trying to create employee.");
		}
	}
	
	@RequestMapping(value="/employee/update.action")
	public @ResponseBody Map<String,? extends Object> update(@RequestBody EmployeeWrapper data) throws Exception {
		try{
System.out.println("Am here "+ data.getData());
			List<Employee> employees = new ArrayList<Employee>();//employeeService.update(data.getData());

			return ExtJSReturn.mapOK1(employees,2);

		} catch (Exception e) {

			return ExtJSReturn.mapError("Error trying to update employee.");
		}
	}
	
	@RequestMapping(value="/employee/delete.action")
	public @ResponseBody Map<String,? extends Object> delete(@RequestBody EmployeeWrapper data) throws Exception {
		
		try{
			
			//employeeService.delete(data.getData());

			Map<String,Object> modelMap = new HashMap<String,Object>(3);
			modelMap.put("success", true);

			return modelMap;

		} catch (Exception e) {

			return ExtJSReturn.mapError("Error trying to delete employee.");
		}
	}
	

	@Autowired
	public void setEmployeeService(EmployeeService employeeService) {
		this.employeeService = employeeService;
	}

}
