var fs = require('fs');
var csv = require('csv');
var strings = [];

var csvFile = 'C:/Formation/theintern_day2/nodejs/sample.csv';



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
/*
Piping streams
Piping streams is taking the output of one stream and feeding it into the input of another.
Reading from one file and writing to another
*/
var readStream = fs.createReadStream(csvFile);
readStream.pipe(parser);
