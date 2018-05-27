var fs = require('fs');
const app = require('../lib/appconfig.js');
const logger = require('../lib/log.js');
const internutils = require('../lib/internutils.js');

module.exports = {
    browser : Object,

    login : async () => {
        logger.info ('Start test login');
        await app.browser().setFindTimeout(5000);
        await app.setCurrentPage ('Authentication');
        await internutils.type ('login', 'Admin');        
        await internutils.type ('pwd', 'test');        
        await internutils.click ('btnLogin');
        await app.setCurrentPage ('Home');
        await internutils.verifyText('WelcomeMenu', 'Welcome Admin');        
  }
}