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
	           title : 'Team Members',
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
	        	   flex : 1,
	        	   dataIndex: 'name',
	        	   flex: 4,
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
	        		   header: "MON",
	        		   flex : 1,
	        		   dataIndex: 'mon',
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
	        		   header: "TUE",
	        		   flex : 1,
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
	        		   header: "WED",
	        		   flex : 1,
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
	        		   flex : 1,
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
	        		   flex : 1,
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
	        		   flex : 1,
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
	        		   flex : 1,
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
	           }/*,{
	        	   header: "Delete",
	        	   iconCls:'icon-delete',
	        	   flex:1,
	        	   action: 'delete',
	        	   qtip:'Remove'
	        		   
	           }*/],

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
	        			   iconCls: 'icon-save',
	        			   itemId: 'add',
	        			   text: 'Add',
	        			   action: 'add'
	        		   },{
	        			   iconCls: 'icon-delete',
	        			   text: 'Delete',
	        			   action: 'delete'
	        		   }]
	        	   },
	        	   {
	        		   xtype: 'pagingtoolbar',
	        		   dock:'top',
	        		   store: 'Employees',
	        		   displayInfo: true,
	        		   displayMsg: 'Displaying Employees {0} - {1} of {2}',
	        		   emptyMsg: "No Employees to display"
	        	   }];

	        	   this.callParent(arguments);
	           }
});
