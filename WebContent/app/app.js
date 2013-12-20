/**
 * Ext JS Library 4.0.0
 * Copyright(c) 2006-2011 Sencha Inc.
 * licensing@sencha.com
 * http://www.sencha.com/license
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
Ext.application({
    name: 'empJS',

    controllers: [
        'Employees'
    ],

    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'border',
            items: [
                {
                	xtype: 'employeelist',
                	region: 'center'
                }, {

                	title: 'Shift Timings',
                	collapsed: false,
                	collapsible: true,
                	width: 640,
                	text: 'bala',
                	html: '<p></p><p></p><p><b>REG: 10AM to 7 PM</b>&nbsp;&nbsp;&nbsp;&nbsp<b>LN: 2PM to 10PM</b>&nbsp;&nbsp;&nbsp;&nbsp<b>NY: 7PM to 6AM</b></p><p></p><p></p',
                	region: 'south'
                }
            ]
        });
    }
});
