Ext.define('empJS.view.employee.List' ,{
	extend: 'Ext.grid.Panel',
	alias : 'widget.employeelist',
	columnLines: true,
	stripeRows: true,
	/*xtype: 'cell-editing',
	selModel: {
        selType: 'cellmodel'
    },*/
	requires: [
	           'Ext.selection.CellModel',
	           'Ext.grid.*',
	           'Ext.data.*',
	           'Ext.util.*',
	           'Ext.form.*',
	           'empJS.model.Employee'
	           ],    
	           iconCls: 'icon-grid',
	           title : 'Shift Manager',
	           store: 'Employees',
	           
	           columns: [
	                     Ext.create('Ext.grid.RowNumberer'),
	             {
	        	   header: "EMP ID",
	        	   dataIndex: 'empid',
	        	   flex: 2,
	        	   editor : {
	        		   allowBlank: false
	        	   }
	           },{
	        	   header: "NAME",
	        	   flex : 2,
	        	   dataIndex: 'name',
	        	   editor : {
	        		   allowBlank: false
	        	   }
	           },{
	        	   header: "MSID",
	        	  flex: 2,
	        	   dataIndex: 'msid',
	        	   editor : {
	        		   allowBlank: false
	        	   }
	           },{
	        	   header: "TASK",
	        	   flex: 2,
	        	   dataIndex: 'task',
	        	   editor : new Ext.form.field.ComboBox({
	        		   typeAhead: true,
	        		   store: [
	        		           ['TASK ORDER','TASK ORDER']
	        		           ]
	        	   })
	           },{
	        	   header: "MSM",
	        	   flex: 2,
	        	   dataIndex: 'msm',
	        	   editor : new Ext.form.field.ComboBox({
	        		   typeAhead: true,
	        		   store: [
	        		           ['MSM','MSM']
	        		           ]
	        	   })
	           },{
	        	   header: "BAU/Trans",
	        	   flex: 2,
	        	   dataIndex: 'bau',
	        	   editor : new Ext.form.field.ComboBox({
	        		   typeAhead: true,
	        		   store: [
	        		           ['BAU','BAU'],
	        		           ['Transition','Transition']
	        		           ]
	        	   })
	           },{
	        	   header: "Billing",
	        	   flex: 2,
	        	   dataIndex: 'bill',
	        	   editor :  new Ext.form.field.ComboBox({
	        		   typeAhead: true,
	        		   store: [
	        		           ['Billable','Billable'],
	        		           ['Non-Bill','Non-Bill']
	        		           ]
	        	   })
	           },{
	        	   text: 'SHIFT',
	        	   columns: [{
	        		   header: "MON     ",
	        		   flex : 2,
	        		   dataIndex: 'mon',
	        		   editor :  new Ext.form.field.ComboBox({
	        			   typeAhead: true,
	        			   store: [
	        			           ['NY','NY'],
	        			           ['LN','LN'],
	        			           ['FH','FH'],
	        			           ['REG','REG'],
	        			           [' ',' ']
	        			           ],
	   	        			    listeners: {
		        			    	'select': function(combo) {
		        			    		combo.fireEvent('blur');
		        			    		var grid = this.up('grid');
		        			    		var rec = grid.getSelectionModel().getSelection()[0];
		        			    		rec.set('mon', combo.getValue());
		        			    		rec.set('tue', combo.getValue());
		        			    		rec.set('wed', combo.getValue());
		        			    		rec.set('thu', combo.getValue());
		        			    		rec.set('fri', combo.getValue());
		        			    	}
		        			    }
	        		   })
	        	   },{
	        		   header: "TUE    ",
	        		   flex : 2,
	        		   dataIndex: 'tue',
	        		   editor :  new Ext.form.field.ComboBox({
	        			   typeAhead: true,
	        			   store: [
	        			           ['NY','NY'],
	        			           ['LN','LN'],
	        			           ['FH','FH'],
	        			           ['REG','REG'],
	        			           [' ',' ']
	        			           ]
	        		   })
	        	   },{
	        		   header: "WED    ",
	        		   flex : 2,
	        		   dataIndex: 'wed',
	        		   editor :  new Ext.form.field.ComboBox({
	        			   typeAhead: true,
	        			   store: [
	        			           ['NY','NY'],
	        			           ['LN','LN'],
	        			           ['FH','FH'],
	        			           ['REG','REG'],
	        			           [' ',' ']
	        			           ]
	        		   })
	        	   },{
	        		   header: "THU",
	        		   flex : 2,
	        		   dataIndex: 'thu',
	        		   editor :  new Ext.form.field.ComboBox({
	        			   typeAhead: true,
	        			   store: [
	        			           ['NY','NY'],
	        			           ['LN','LN'],
	        			           ['FH','FH'],
	        			           ['REG','REG'],
	        			           [' ',' ']
	        			           ]
	        		   })
	        	   },{
	        		   header: "FRI",
	        		   flex : 2,
	        		   dataIndex: 'fri',
	        		   editor :  new Ext.form.field.ComboBox({
	        			   typeAhead: true,
	        			   store: [
	        			           ['NY','NY'],
	        			           ['LN','LN'],
	        			           ['FH','FH'],
	        			           ['REG','REG'],
	        			           [' ',' ']
	        			           ]
	        		   })
	        	   },{
	        		   header: "SAT",
	        		   flex : 2,
	        		   dataIndex: 'sat',
	        		   editor :  new Ext.form.field.ComboBox({
	        			   typeAhead: true,
	        			   store: [
	        			           ['NY','NY'],
	        			           ['LN','LN'],
	        			           ['FH','FH'],
	        			           ['REG','REG'],
	        			           [' ',' ']
	        			    ]
	        		   })
	        	   },{
	        		   header: "SUN",
	        		   flex : 2,
	        		   dataIndex: 'sun',
	        		   editor :  new Ext.form.field.ComboBox({
	        			   typeAhead: true,
	        			   store: [
	        			           ['NY','NY'],
	        			           ['LN','LN'],
	        			           ['FH','FH'],
	        			           ['REG','REG'],
	        			           [' ',' ']
	        			           ]
	        		   })
	        	   }]
	           },{
	        	   header: "PICKUP",
	        	   flex: 2,
	        	   dataIndex: 'pickup',
	        	   editor : {
	        		   allowBlank: true
	        	   }
	           },{
	        	   header: "DROP",
	        	   flex: 2,
	        	   dataIndex: 'drop',
	        	   editor : {
	        		   allowBlank: true
	        	   }
	           },{
	        	   header: "ACTIVE",
	        	   flex: 2,
	        	   dataIndex: 'active',
	        	   editor : {
	        		   allowBlank: true
	        	   }
	           }],
	           initComponent: function() {

	        	   this.cellEditing = new Ext.grid.plugin.CellEditing({
	        		   clicksToEdit: 1
	        	   });
	        	   Ext.apply(this, {
	        	    plugins: [this.cellEditing]
	        	   });

	        	   this.dockedItems = [{
	        		   xtype: 'toolbar',
	        		   items: [{
	        			   emptyText:'Enter WON',
	                       id: 'WON',    
	                       xtype: 'textfield'
	                   },{
	        			   iconCls: 'icon-search',
	        			   itemId: 'search',
	        			   text: 'Search',
	        			   action: 'search'
	        		   },{
	                       xtype:'tbspacer',
	                       flex:2.5
	                   },{
	                       id: 'WKDATE',    
	                       xtype: 'datefield',
	                       format: 'd-M-Y',
	                       disabledDays: [0,2,3,4,5,6],
	                       emptyText: 'Select a Monday',
	                       listeners : {
	                           'change' : function(field, newValue, oldValue) {
	                        	   var nextDate = newValue;
	                               for (var j=8;j<15;j++) {
	                            	   var dateD = Ext.Date.format(nextDate,'d/m');
	                            	   var dayD = Ext.Date.format(nextDate,'D');
	                            	   var textD = dateD+"<br>"+dayD.toUpperCase();
	                            	   this.up('grid').columns[j].setText(textD);
	                            	   nextDate =  Ext.Date.add(nextDate,Ext.Date.DAY,1);
	                               }

	                           }
	                       }
	                   },{
	                       xtype:'tbspacer',
	                       flex:1
	                   },{
	        			   iconCls: 'icon-save',
	        			   itemId: 'add',
	        			   text: 'Add',
	        			   action: 'add',
	        			   align: 'right'	
	        				   
	        		   },{
	        			   iconCls: 'icon-delete',
	        			   text: 'Delete',
	        			   action: 'delete'
	        		   }]
	        	   },
	        	   {
	        		   xtype: 'pagingtoolbar',
	        		   dock:'bottom',
	        		   store: 'Employees',
	        		   displayInfo: true,
	        		   displayMsg: 'Displaying Employees {0} - {1} of {2}',
	        		   emptyMsg: "No Employees to display"
	        	   }];

	        	   this.callParent(arguments);
	           }
});
