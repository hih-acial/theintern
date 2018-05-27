var fs = require('fs');
const app = require('../lib/appconfig.js');
const logger = require('../lib/log.js');
const internutils = require('../lib/internutils.js');

module.exports = {
    browser : Object,

    searchEmployee : async () => {
        logger.info ('Start test searchEmployee');

        
        await app.setCurrentPage ('Menu');
        await internutils.click ('PIM');        
        await internutils.click ('PIM_EmployeeList');
        
        await app.setCurrentPage ('PIM_EmployeeList');
        await internutils.autocomplete ('EmployeeName', 'IMHAH');
        await internutils.click ('SearchBtn');
        await internutils.click('Ligne1_Nom');
        
        
  }
}