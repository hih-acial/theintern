const { suite, test, before } = intern.getInterface('tdd');
var auth = require('../../pages/loginPO');
var employee = require('../../pages/employeePO');

suite('OrangeHRM', () => {
      before(({ remote }) => {
            return remote
                  .get('https://www.universitedutest.com/OrangeHRM')
            });

      test('login', ({ remote }) => {
            return remote
                  .then(auth.login('admin', 'acial$2017', 'Welcome Admin'));
      });

      test('add employee', ({ remote }) => {
            return remote
                  .setFindTimeout(5000)
                  .findById('menu_pim_viewPimModule')
                  .click()
                  .end()
                  .findById('menu_pim_addEmployee')
                  .click()
                  .end()
                  .findById('firstName')
                  .type('hassan')
                  .end()
                  .findById('lastName')
                  .type('IMHAH')
                  .end()
                  .findById('btnSave')
                  .click()
                  .end()
      });

      test('logout', ({ remote }) => {
            return remote
            .then(auth.logout());

      });
});
