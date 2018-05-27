var fs = require('fs');
const app = require('../lib/appconfig.js');
const logger = require('../lib/log.js');
const internutils = require('../lib/internutils.js');

module.exports = {
    browser : Object,

    navigate : async () => {
        logger.info ('Start test navigate');
        await app.setCurrentPage ('Menu');
        await internutils.click ('PIM');        
        await internutils.click ('PIM_AddEmployee');
        await internutils.click ('PIM');        
        await internutils.click ('PIM_EmployeeList');
  }
}