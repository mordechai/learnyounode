var path = require('path')
var fs = require('fs')


module.exports = function(dirPath, fileExt, cb){
	fileExt = '.' + fileExt

    selectedFiles = []

	fs.readdir(dirPath, function finishedReading(error, list){
    	if (error){
    		return cb (error, null)
    	}
    	    files = list.toString().split(',')
    		
    	    for (var i = 0; i < files.length; i++) {
    	      	if (path.extname(files[i]) == fileExt) {
    	      		selectedFiles.push(files[i])
    	      	} 
    	   };
    	   return cb(null, selectedFiles)
        })
}
    


