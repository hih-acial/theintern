const { suite, test, before } = intern.getInterface('tdd');
var auth = require('../../pages/loginPO');
var employee = require('../../pages/employeePO');

suite('OrangeHRM', () => {
      before(({ remote }) => {
            return remote
                  .get('http://opensource.demo.orangehrmlive.com/')
            });

      test('login', ({ remote }) => {
            return remote
                  .then( auth.login('admin', 'admin', 'Welcome Admin' ));
      });

      test('add employee', ({ remote }) => {
            return remote
                  .then( employee.addEmployee('EmployeeName1', 'EmployeeFirstName') );
      });

      test('logout', ({ remote }) => {
            return remote
            .then(auth.logout());

      });
});
