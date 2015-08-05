var http = require('http')
var fs = require('fs')
var url = process.argv[2]

http.get(url, function(resp){
  resp.setEncoding('utf8')
  var result = "";
  resp.on('data', function(chunk){
    result += chunk;
  });
  resp.on('end', function(chunk){
  	console.log(result.length)
  	console.log(result)
  })
}).on("error", function(e){
  console.log("Got error: " + e.message);
});