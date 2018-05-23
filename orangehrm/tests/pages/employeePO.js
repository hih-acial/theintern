var chai = require('chai')
  , should = chai.should()

module.exports = {

    addEmployee: function (lastname, firstname) {
        return function () {
            return this.parent
                .setFindTimeout(5000)
                .findById('menu_pim_viewPimModule')
                .click()
                .end()
                .findById('menu_pim_addEmployee')
                .click()
                .end()
                .findById('firstName')
                .type(firstname)
                .end()
                .findById('lastName')
                .type(lastname)
                .end()
                .findById('btnSave')
                .click()
                .end()
                .findById('profile-pic')
                .getVisibleText()
                .then((text) => {
                        console.log (text);
                        should.equal(text, `${firstname}   ${lastname}`);
                });
        }
    }
    
}