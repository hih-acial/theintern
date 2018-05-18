const { suite, test, before } = intern.getInterface('tdd');
const { assert } = intern.getPlugin('chai');

suite('index', () => {
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
            .end()
            .findByCssSelector('#sbtc > div.gstl_0.sbdd_a > div:nth-child(2) > div.sbdd_b > div > ul > li:nth-child(11) > div > span:nth-child(1) > span > input')
            .click()
            .end()
            .findByCssSelector('#rso > div > div > div:nth-child(1) > div > div > h3 > a')
            .getVisibleText()
            .then((text) => {
				console.log(text);
                assert.strictEqual(text, 'ACIAL : Le spécialiste du mobilier métallique pour tous les secteurs de ...');
            });
    });
});
