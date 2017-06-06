const express = require('express')
const app = express()
var userInfo = {}

app.get('/', function (req, res) {
  userInfo.ipaddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  userInfo.language = req.headers["accept-language"]
  userInfo.software = req.headers['user-agent']
  
  res.json(userInfo)
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})
