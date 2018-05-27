const intern = require('intern');

intern.default.configure ({ 
	functionalSuites: 'essai.js',
	environments: [  'node', { 'browserName': 'chrome' } ],
	tunnelOptions: {'drivers': [{ 'name': 'chrome', 'version': '2.38' }] }
});


intern.default.run();