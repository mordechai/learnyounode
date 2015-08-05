var fs = require('fs')

//# solution provided
    var fs = require('fs')

    fs.readFile(process.argv[2], 'utf8', function finishedReading(error, fileData){
    	if (error) return console.error(error)
    		console.log(fileData.toString().split('\n').length - 1)
    })
    
    // note you can avoid the .toString() by passing 'utf8' as the
    // second argument to readFileSync, then you'll get a String!
    //
    // fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1