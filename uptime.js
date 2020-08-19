let express = require("express"),
    http = require('http'),
    app = express();

app.use(express.static("public"));
app.get("/", function(request, response) {
  response.sendStatus(200); // Status: OK
});

let listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});

setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);