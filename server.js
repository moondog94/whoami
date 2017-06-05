const express = require('express')
const app = express()
var timestamp = {}

app.get('/:time', function (req, res) {
  var time = req.params.time
  var isnum = /^\d+$/.test(time);
  if(isnum) var date = new Date(+time * 1000)
  else var date = new Date(time)
  if(isNaN( date ))
  {
    timestamp.unix = null
    timestamp.natural = null
  }
  else{
    timestamp.unix = date.getTime() / 1000
    timestamp.natural = date.toString()
  }
  res.json(timestamp)
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})
