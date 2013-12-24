Ext.define('empJS.controller.Employees', {
    extend: 'Ext.app.Controller',

    stores: ['Employees'],

    models: ['Employee'],

    views: ['employee.List', 'employee.Search'],

    refs: [{
            ref: 'employeelist',
            selector: 'employeelist'
        }
    ],

    init: function() {
        this.control({
            'employeelist button[action=search]': {
                click: this.searchUser
            },
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
    
    searchUser: function(button) {
    	var won = button.up('grid').down('#WON').value;
    	var wkdate = button.up('grid').down('#WKDATE').getSubmitValue();
    	 if (typeof won == 'undefined' || typeof wkdate == 'undefined') {
         	Ext.MessageBox.alert('Input Missing', 'Enter WON and Week to Search.');
         }
    	this.getEmployeesStore().load({
    		params: {won : won, wkdate: wkdate}
    	});
    },

    editUser: function(grid, record) {
    	record = Ext.create('empJS.model.Employee');
		record.setId(0);
		this.getEmployeesStore().add(record);
    },
    
    updateUser: function(button) {
        var won    = button.up('grid').down('#WON').value;
        var wkdate = button.up('grid').down('#WKDATE').value;
        if (typeof won == 'undefined' ||typeof wkdate == 'undefined') {
        	Ext.MessageBox.alert('Input Missing', 'Enter WON and Week before Update.');
        }
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


