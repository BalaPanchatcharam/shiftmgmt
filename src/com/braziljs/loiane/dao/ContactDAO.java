package com.braziljs.loiane.dao;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.hibernate.SessionFactory;
import org.hibernate.criterion.DetachedCriteria;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.support.DataAccessUtils;
import org.springframework.orm.hibernate3.HibernateTemplate;
import org.springframework.stereotype.Repository;

import com.braziljs.loiane.model.Contact;
import com.braziljs.loiane.model.Employee;

/**
 * Contact DAO class.
 * 
 * Sample project presented at BrazilJS
 * Brazilian JavaScript Conference
 * Fortaleza - Cear� - 13-14 May 2011
 * http://braziljs.com.br/2011
 * 
 * @author Loiane Groner
 * http://loianegroner.com (English)
 * http://loiane.com (Portuguese)
 */
@Repository
public class ContactDAO {
	
	private HibernateTemplate hibernateTemplate;
	
	@PersistenceContext
	private EntityManager em;

	public void setSessionFactory(SessionFactory sessionFactory) {
		hibernateTemplate = new HibernateTemplate(sessionFactory);
	}
	
	/**
	 * Get List of contacts from database
	 * @return list of all contacts
	 */
	@SuppressWarnings("unchecked")
	public List<Employee> getContacts(int start, int limit) {
		System.out.println(" I am here ");
		List<Employee> list1 = null;
		Query qr= em.createQuery("select e from Employee e");
		list1 = qr.getResultList();
		System.out.println(" Size list :  " + list1.size());
        return list1;
		/*DetachedCriteria criteria = DetachedCriteria.forClass(Employee.class);
		System.out.println(" I am here2 ");

		return hibernateTemplate.findByCriteria(criteria, start, limit);
		Contact contact = null;
		System.out.println("Bala here");
		for (int i=0;i<5;i++) {
			contact = new Contact();
			contact.setId(i);
			contact .setName("Contact "+ i);
			contact .setEmail("bala@gmail.com");
			list.add(contact);
		}
		return list;*/
	}

	/**
	 * Delete a contact with the id passed as parameter
	 * @param id
	 */
	public void deleteContact(int id){
		Object record = hibernateTemplate.load(Contact.class, id);
		hibernateTemplate.delete(record);
	}
	
	/**
	 * Create a new Contact on the database or
	 * Update contact
	 * @param contact
	 * @return contact added or updated in DB
	 */
	public Contact saveContact(Contact contact){
		hibernateTemplate.saveOrUpdate(contact);
		return contact;
	}
	
	/**
	 * Get total of Contacts from database
	 * @return
	 */
	public int getTotalContacts(){
	    return DataAccessUtils.intResult(hibernateTemplate.find("SELECT COUNT(*) FROM Contact"));
	}

}
