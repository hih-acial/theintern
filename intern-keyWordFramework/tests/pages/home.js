var fs = require('fs');
const app = require('../lib/appconfig.js');
const logger = require('../lib/log.js');
const internutils = require('../lib/internutils.js');

module.exports = {
    browser : Object,

    logout : async () => {
        
        logger.info ('Start test logout');
        await app.setCurrentPage ('Home');
        await internutils.click ('WelcomeMenu');        
        await internutils.click ('Logout');        
  }
}