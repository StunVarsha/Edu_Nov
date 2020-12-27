var http = require('http')
  var server = http.createServer(function(req,res){
      res.write("This is server's response")
      res.end()
  })
server.listen(9801);
 // Localhost : 9800 or https://127.0.0.1/9800/