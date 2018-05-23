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
