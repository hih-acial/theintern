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

      

      test('logout', ({ remote }) => {
            return remote
            .then(auth.logout());

      });
});
