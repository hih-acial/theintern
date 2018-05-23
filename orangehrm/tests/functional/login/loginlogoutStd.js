const { registerSuite } = intern.getInterface('object');
const { assert } = intern.getPlugin('chai');
registerSuite('Orangehrm registerSuite sample', {
      'login'() {
          return this.remote
            .get('http://localhost/OrangeHRM')
            .setFindTimeout(5000)
                  .findById('txtUsername')
                  .type('admin')
                  .end()
                  .findById('txtPassword')
                  .type('test')
                  .end()
                  .findById('btnLogin')
                  .click()
                  .end()
      }
  });