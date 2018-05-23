  'use strict'
  const fs = require('fs');
  var fileName = 'C:/Formation/theintern_day2/nodejs/textfile.txt';

  // Read file sync method
/*


var data = fs.readFileSync(fileName);
console.log( JSON.parse(data));


var terminer = function(err, contents) {
                  console.log(contents);
                };

fs.readFile(fileName, 'utf8', terminer);
console.log('after calling readFile');
*/


const getData = (fileName, type) =>  
  new Promise(
      (resolve, reject) => {
        fs.readFile(fileName, type, (err, data) => {
          //if has error reject, otherwise resolve
          return err ? reject(err) : resolve(data);
          })
  });

  getData(fileName, 'utf8')
    .then(data => console.log('Data: ', data))
    .catch(error => console.log('Error: ', error));

  console.log('after calling promise');
