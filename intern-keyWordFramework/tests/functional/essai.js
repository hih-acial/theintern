const { suite, test, before, after } = intern.getInterface('tdd');
const app = require('../lib/appconfig.js');
const logger = require('../lib/log.js');

const auth = require('../pages/authentication.js');
const home = require('../pages/home.js');

suite('Login logout', () => {
	before(async ({ remote }) => {
		logger.info ('Start test suite')
		await app.setBrowser (remote);
		await app.browser().get('http://localhost/OrangeHRM');
		await auth.login();
	});

	test('login', async ({ remote }) => {
        await app.browser().findByCssSelector('#menu_pim_viewPimModule > b').click();
		await app.browser().findById('menu_pim_viewEmployeeList').click();
		let list = await app.browser().findById('empsearch_job_title');
		await list.click();
		await app.browser().findByXpath ("//select[@id='empsearch_job_title']//option[@value='2']").click();
		await app.browser().findByXpath ("//option[*][contains(text(),'Bid Manager')]").click();
	});

	after(async ({ remote }) => {
		await home.logout();
	});
});


