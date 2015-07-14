var asyncModule = require('C:\\Projects\\learnyounode\\6\\asyncModule')

    var dir = process.argv[2]
    var fileType = process.argv[3] //"." + process.argv[3]

  asyncModule(dir, fileType, function(error, data){
    if(error) console.log (error)
    data.forEach(function(i){
      console.log(i)
    })
  })

/*

used https://github.com/nodeschool/discussions/issues/757 as guide


check out official solution tho''''

use of filter is pretty nifty...

Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────
solution.js:

    var filterFn = require('./solution_filter.js')
    var dir = process.argv[2]
    var filterStr = process.argv[3]

    filterFn(dir, filterStr, function (err, list) {
      if (err)
        return console.error('There was an error:', err)

      list.forEach(function (file) {
        console.log(file)
      })
    })

────────────────────────────────────────────────────────────────────────────
solution_filter.js:

    var fs = require('fs')
    var path = require('path')

    module.exports = function (dir, filterStr, callback) {

      fs.readdir(dir, function (err, list) {
        if (err)
          return callback(err)

        list = list.filter(function (file) {
          return path.extname(file) === '.' + filterStr
        })

        callback(null, list)
      })
    }

    
  */

