const { suite, test, before } = intern.getInterface('tdd');
var auth = require('../pages/login');

suite('OrangeHRM', () => {
      before(({ remote }) => {
            return remote
                  .get('http://localhost/OrangeHRM')
            });

      test('login', ({ remote }) => {
            return remote
                  .then(auth.login('admin', 'test'));
      });

      test('add employee', ({ remote }) => {
            var employees = [ ['Albert','Einstein'], ['Leonardo','Da Vinci'] ];
            return employees.reduce(function (chain, employee) {
                  return chain
                        .setFindTimeout(5000)
                        .findById('menu_pim_viewPimModule')
                        .click()
                        .end()
                        .findById('menu_pim_addEmployee')
                        .click()
                        .end()
                        .findById('firstName')
                        .type(employee[0])
                        .end()
                        .findById('lastName')
                        .type(employee[1])
                        .end()
                        .findById('btnSave')
                        .click()
                        .end()}, remote);
      });

      test('logout', ({ remote }) => {
            return remote
            .then(auth.logout());

      });
});
