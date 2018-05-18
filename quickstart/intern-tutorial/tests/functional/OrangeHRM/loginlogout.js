const { suite, test, before } = intern.getInterface('tdd');
const { assert } = intern.getPlugin('chai');

suite('OrangeHRM', () => {
    before(({ remote }) => {
        return remote
            .get('https://www.universitedutest.com/OrangeHRM')
});

  test('login', ({ remote }) => {
        return remote
            .setFindTimeout(5000)
            .findById('txtUsername')
            .type('admin')
            .end()
            .findById('txtPassword')
            .type('acial$2017')
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
