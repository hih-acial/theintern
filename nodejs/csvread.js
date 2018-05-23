var fs = require('fs');
var csv = require('csv');
var contents = [];

var csvFile = 'C:/Formation/theintern_day2/nodejs/sample.csv';

/*
https://www.npmjs.com/package/csv-parse
Part of the CSV module, this project is a parser converting CSV
 text input into arrays or objects. 
 It implements the Node.js stream.Transform API. 
 It also provides a simple callback-based API for convenience. 
 It is both extremely easy to use and powerful. 
 It was first released in 2010 and is used against big data sets
  by a large community.
https://nodejs.org/api/stream.html
*/
var parser = csv.parse({columns:true});

parser.on('readable', function() {
  while(record = parser.read()) {
    contents.push(record);
  }
});

parser.on('error', function(err) {
  console.log(err.message);
});

/*
The 'end' event is emitted when there is no more data to be consumed from the stream.
The 'end' event will not be emitted unless the data is completely consumed. 
This can be accomplished by switching the stream into flowing mode,
 or by calling stream.read() repeatedly until all data has been consumed.
The 'finish' event is emitted after the stream.end() method has been called, 
and all data has been flushed to the underlying system.
*/
parser.on('finish', (function() {
  console.log(contents);
}));
/*
Piping streams
Piping streams is taking the output of one stream and feeding it into the input of another.
Reading from one file and writing to another
*/
var readStream = fs.createReadStream(csvFile);
readStream.pipe(parser);
