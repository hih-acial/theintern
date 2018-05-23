const { describe, before, it } = intern.getInterface('bdd');
const { expect } = intern.getPlugin('chai');

describe('functional/Todo', () => {
	before(async ({ remote }) => {
		await remote.get('http://localhost/OrangeHRM');
		
	});

	it('Logon OrangeHRM with admin account', async ({ remote }) => {

		await remote.setFindTimeout(5000);
		const login = await remote.findById('txtUsername');
		await login.type('admin');
		
        const pwd = await remote.findById('txtPassword');
		await pwd.type('test');

		const btnLogin = await remote.findById('btnLogin');
		await btnLogin.click();

	});
	it('Search employee', async ({ remote }) => {
	
		await remote.setFindTimeout(5000);
		const PIM = await remote.findById('menu_pim_viewPimModule');
		await PIM.click();
		
		const listEmployee = await remote.findById('menu_pim_viewEmployeeList');
		await listEmployee.click();

		const nameSearch = await remote.findById('empsearch_employee_name_empName');
		await nameSearch.click();
		await nameSearch.pressKeys('IMHAH');

		const searchBtn = await remote.findById('searchBtn');
		await nameSearch.click();
		
		

	});
	
	it('logout from orangeHRM', async ({ remote }) => {

		await remote.setFindTimeout(5000);
		const welcome = await remote.findById('welcome');
		await welcome.click();
		
        const logout = await remote.findByLinkText('Logout')
		await logout.click();



		/*
		

		const todos = await remote.findAllByCssSelector('.todo-list > li');
		expect(todos).to.have.lengthOf(3);

		expect(await todos[0].getVisibleText()).to.equal('Task 1');
		expect(await todos[1].getVisibleText()).to.equal('Task 2');
		expect(await todos[2].getVisibleText()).to.equal('Task 3');*/
	});
});
