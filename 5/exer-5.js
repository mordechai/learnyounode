var path = require('path')
var fs = require('fs')

//# solution provided
    var fs = require('fs')
    var dir = process.argv[2]
    var fileType = "." + process.argv[3]

    fs.readdir(process.argv[2], function finishedReading(error, list){
    	if (error) return console.error(error)
    	    files = list.toString().split(',')
    	    for (var i = 0; i < files.length; i++) {
    	      	printFileEntry(fileType, files[i])
    	   };
        })
    
    function printFileEntry(fileType, entry){
    	if (path.extname(entry) == fileType) 
    		console.log(entry)
    }

/*
check out that forEach bur....

  var fs = require('fs')
  var path = require('path')

  fs.readdir(process.argv[2], function (err, list) {
    list.forEach(function (file) {
      if (path.extname(file) === '.' + process.argv[3])
        console.log(file)
    })
  })

  */