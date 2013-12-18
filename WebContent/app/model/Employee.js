Ext.define('empJS.model.Employee', {
    extend: 'Ext.data.Model',
    fields: ['empid', 'name', 'msid', 'task', 'msm' ,'bau', 'bill',
             'mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun', 'pickup', 'drop', 'active']
});         