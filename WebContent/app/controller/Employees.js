Ext.define('empJS.controller.Employees', {
    extend: 'Ext.app.Controller',

    stores: ['Employees'],

    models: ['Employee'],

    views: ['employee.List'],

    refs: [{
            ref: 'employeelist',
            selector: 'employeelist'
        }
    ],

    init: function() {
        this.control({
            /*'employeelist dataview': {
                itemdblclick: this.editUser
            },*/
            'employeelist button[action=add]': {
            	click: this.editUser
            },
            'employeelist button[action=delete]': {
                click: this.deleteUser
            },
            'employeelist button[action=save]': {
                click: this.updateUser
            }
        });
    },

    editUser: function(grid, record) {
    	record = Ext.create('empJS.model.Employee');
		record.setId(0);
		this.getEmployeesStore().add(record);
    },
    
    updateUser: function(button) {
        var win    = button.up('window'),
            form   = win.down('form'),
            record = form.getRecord(),
            values = form.getValues();
        
        
		if (values.id > 0){
			record.set(values);
		} else{
			record = Ext.create('empJS.model.Employee');
			record.set(values);
			record.setId(0);
			this.getEmployeesStore().add(record);
		}
        
		win.close();
        this.getEmployeesStore().sync();
    },
    
    deleteUser: function(button) {
    	var grid = this.getEmployeelist(),
    	record = grid.getSelectionModel().getSelection(), 
        store = this.getEmployeesStore();

	    store.remove(record);
	    this.getEmployeesStore().sync();
    }
});
