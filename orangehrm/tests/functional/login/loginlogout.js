const { suite, test, before } = intern.getInterface('tdd');
const { assert } = intern.getPlugin('chai');

      suite('OrangeHRM', () => {
      before(({ remote }) => {
            return remote
                  .get('http://localhost/OrangeHRM')
      });

      test('login', ({ remote }) => {
            return remote
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
                  .findById('welcome')
                  .getVisibleText()
                  .then((text) => {
                        console.log (text);
                        assert.strictEqual(text, 'Welcome Admin');
                  });
      });

      test('navigate', ({ remote }) => {
            return remote
            .setFindTimeout(5000)
            .findById('menu_admin_viewAdminModule')
            .click()
            .end()
            .findById('menu_admin_Organization')
            .click()
            .end()
            .findById('menu_admin_viewOrganizationGeneralInformation')
            .click()
            .end()
            .findById('genInfoHeading')
            .getVisibleText()
            .then((text) => {
                  console.log (text);
                  assert.strictEqual(text, 'General Information');
            })
                  .catch((text) => {
                  console.log ('object not found identified by id genInfoHeading');
                  });
      });

      test('logout', ({ remote }) => {
            return remote
                  .setFindTimeout(5000)
                  .findById('welcome')
                  .click()
                  .end()
                  .findByLinkText('Logout')
                  .click()
                  .end()
                  .findById('txtUsername')
                  .isDisplayed()
                  .then((visible) => {
                        console.log (visible);
                        assert.strictEqual(visible,true);
                  })
            .end()
            .findById('btnLogin')
            .getAttribute('value')
            .then((loginvalue) => {
                  console.log (loginvalue);
                  assert.strictEqual(loginvalue,"LOGIN");
            })
            .end()

      });
});
