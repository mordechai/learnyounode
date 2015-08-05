var http = require('http')
var fs = require('fs')
var events = require('events');
var allUrlsComplete = 0

var result = []

setTimeout(function(){
     console.log(result[0])
     console.log(result[1])
     console.log(result[2])
    }, 4000)

for (var i = 2; i <= 4; i++) {
    getHttp(process.argv[i],i - 2)
}



function getHttp(url, urlMapping){
  http.get(url, function(resp){
    resp.setEncoding('utf8')
    result[urlMapping] = "";
    resp.on('data', function(chunk){
      result[urlMapping] += chunk;
    });
  resp.on('end', function(chunk){
 	    allUrlsComplete +=1      
    })
  }).on("error", function(e){
  console.log("Got error: " + e.message);
  });
}


/*

Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────

    var http = require('http')
    var bl = require('bl')
    var results = []
    var count = 0

    function printResults () {
      for (var i = 0; i < 3; i++)
        console.log(results[i])
    }

    function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err)
            return console.error(err)

          results[index] = data.toString()
          count++

          if (count == 3)
            printResults()
        }))
      })
    }

    for (var i = 0; i < 3; i++)
      httpGet(i)


*/