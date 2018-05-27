const { suite, test, before } = intern.getInterface('tdd');
const app = require('../lib/appconfig.js');
const logger = require('../lib/log.js');

const auth = require('../pages/authentication.js');
const home = require('../pages/home.js');
const menu = require('../pages/menu.js');
const empList = require('../pages/employeeList.js');


suite('Login logout', () => {
	before(async ({ remote }) => {
		logger.info ('Start test suite')
		await app.setBrowser (remote);
		await app.browser().get('http://localhost/OrangeHRM');
	});

	test('login', async ({ remote }) => {
		await auth.login();
	});
	test('navigate', async ({ remote }) => {
		await menu.navigate();
	});
	test('Search Employee', async ({ remote }) => {
		await empList.searchEmployee();
	});
	test('logout', async ({ remote }) => {
		await home.logout();
	});
});


