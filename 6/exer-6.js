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

  */