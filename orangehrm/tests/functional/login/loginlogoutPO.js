const { suite, test, before } = intern.getInterface('tdd');
var auth = require('../../pages/loginPO');

suite('OrangeHRM', () => {
      before(({ remote }) => {
            return remote
                  .get('https://www.universitedutest.com/OrangeHRM')
            });

      test('login', ({ remote }) => {
            return remote
                  .then(auth.login('admin', 'acial$2017', 'Welcome Admin'));
      });

      

      test('logout', ({ remote }) => {
            return remote
                  .then(auth.logout());

      });
});
