Ext.define('empJS.store.Employees', {
    extend: 'Ext.data.Store',
    model: 'empJS.model.Employee',
    pageSize: 35,
    autoLoad: {start: 0, limit: 35},
    
    proxy: {
        type: 'ajax',
        api: {
        	read : 'employee/view.action',
            create : 'employee/create.action',
            update: 'employee/update.action',
            destroy: 'employee/delete.action'
        },
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            allowSingle: false,
            writeAllFields: true,
            headers: { 'Content-Type': 'application/json' },
            content: 'application/json',
            encode: false,
            root: 'data'
        },
        listeners: {
            exception: function(proxy, response, operation){
                Ext.MessageBox.show({
                    title: 'REMOTE EXCEPTION',
                    msg: operation.getError(),
                    icon: Ext.MessageBox.ERROR,
                    buttons: Ext.Msg.OK
                });
            }
        }
    }
});