'use strict'
var fs = require('fs');
var fileName = 'F:\\Acial\\Formation\\theintern.io\\Day02\\node\\textfile.txt';

var data = fs.readFileSync(fileName);
console.log(data.toString());

fs.readFile(fileName, 'utf8', function(err, contents) {
    console.log(contents);
});
console.log('after calling readFile');

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
