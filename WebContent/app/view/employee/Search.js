/**
 * 
 */

Ext.define('empJS.view.employee.Search' ,{
	extend: 'Ext.form.Panel',
	alias : 'widget.employeesearch',
    bodyPadding: '5 5 0',
	fieldDefaults: {
        labelWidth: 100,
        xtype: 'textfield'
    },
    title: 'Shift Manager',
	requires: [
	           'Ext.form.*'
	           ],
    /*fieldDefaults: {
	        	   msgTarget: 'side',
	        	   labelWidth: 100
	           },*/
    defaults: {
        anchor: '100%'
    },
    defaultType: 'textfield',
    items :[{
        fieldLabel: 'WON',
        id:  'WON',
        name: 'WON'
    }],
    buttons: [{
    	text: 'Search',
    	action: 'search'
    }]
});