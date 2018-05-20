var keys = require('@theintern/leadfoot/keys').default;
const { suite, test, before } = intern.getInterface('tdd');
const { assert } = intern.getPlugin('chai');

suite('googleSearch', () => {
    before(({ remote }) => {
        return remote
            .get('https://www.google.fr/')
            .setFindTimeout(5000)
            .findDisplayedByCssSelector('#hplogo');
    });
    test('search', ({ remote }) => {
        return remote
            .setFindTimeout(5000)
            .findById('lst-ib')
            .click()
            .type('Acial')
			.pressKeys(keys.TAB)
            .end()
            .findByName('btnK')
            .click()
            .end()
            .findByXpath("//a[contains(text(),'Formation | Acial')]")
            .getVisibleText()
            .then((text) => {
				console.log(text);
                assert.strictEqual(text, 'Formation | Acial');
            });
    });
});
