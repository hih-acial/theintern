const { suite, test, before } = intern.getInterface('tdd');
var authPO = require('../../pages/loginPO');
var employeePO = require('../../pages/employeePO');

suite('OrangeHRM', () => {
      before(({ remote }) => {
            return remote
                  .get('http://opensource.demo.orangehrmlive.com/')
      });

      test('login', ({ remote }) => {
            return remote
                  .then(authPO.login('admin', 'admin', 'Welcome Admin'));
      });

      test('add employee', ({ remote }) => {
            var employees = [['Albert', 'Einstein'], ['Leonardo', 'Da Vinci']];
            return employees.reduce(function (chain, employee) {
                  return chain
                        .then(employeePO.addEmployee(employee[0], employee[1]))
            }, remote);
      });

      test('logout', ({ remote }) => {
            return remote
                  .then(authPO.logout());

      });
});
