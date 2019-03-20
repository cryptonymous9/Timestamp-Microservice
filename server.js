// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 

var cors = require('cors');
app.use(cors({
  optionSuccessStatus: 200
})); // some legacy browsers choke on 204


app.use(express.static('public'));



app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({
    greeting: 'hello API'
  });
});



app.get("/:date", (req, res) => {
  time = parseInt(req.params.date * 1000);
  if (isNaN(time)) time = req.params.date;

  var result = {
    "unix": null,
    "utc": "Invalid Date"
  }
  var date = new Date(time);
  if (!isNaN(date)) {
    result = {
      "unx": date.getTime(),
      "utc": date.toString()
    }
  } 
res.json(result)

})

var port = process.env.PORT || 8080;
// var Port = process.env.PORT || 5000;
// listen for requests :)
var listener = app.listen(port, function () {
  console.log('Your app is listening on port ' + port);
});