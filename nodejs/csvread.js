var fs = require('fs');
var csv = require('csv');
var strings = [];

var csvFile = 'F:\\Acial\\Formation\\theintern.io\\Day02\\node\\sample.csv';

var readStream = fs.createReadStream(csvFile);

var parser = csv.parse({columns:true});

parser.on('readable', function() {
  while(record = parser.read()) {
    strings.push(record);
  }
});

parser.on('error', function(err) {
  console.log(err.message);
});

parser.on('finish', (function() {
  console.log(strings);
}));

readStream.pipe(parser);
