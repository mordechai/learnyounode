var fs = require('fs')
var file = process.argv[2]
var myBuffer = fs.readFileSync(file);
var str = myBuffer.toString();
var x = str.split("\n").length;
console.log(x-1);


# solution provided
    var fs = require('fs')

    var contents = fs.readFileSync(process.argv[2])
    var lines = contents.toString().split('\n').length - 1
    console.log(lines)

    // note you can avoid the .toString() by passing 'utf8' as the
    // second argument to readFileSync, then you'll get a String!
    //
    // fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1