
const { assert } = intern.getPlugin('chai');
module.exports = {

    login: function (username, password) {
        return function () {
            return this.parent
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
        }
    },
    logout: function () {
        return function () {
            return this.parent
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
        }
    }
}