const express = require("express"),
      app = express(),
      port = 3000;

app.get("/", (req, res) => res.send("I am ready."));

app.listen(port, () => console.log(`Your app is listening on port ${port}`));