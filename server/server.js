const express = require("express");
const path = require("path");
const request = require("request");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("test");
});

app.get("/getcourses", function(req, res) {
  request(
    "https://authenticjobs.com/api/?api_key=63bc8064b1c91080cba959a745b85175&format=json&method=aj.jobs.search&keywords=developer&perpage=100&aj.jobs.getLocation=Austin",
    function(error, response, body) {
      if (!error && response.statusCode == 200) {
        const data = JSON.parse(body);
        res.json(data);
      }
    }
  );
});
app.get("/popularskills", function(req, res) {
    request(
      "https://authenticjobs.com/api/?api_key=63bc8064b1c91080cba959a745b85175&format=json&method=aj.jobs.search&keywords=developer&perpage=100&aj.jobs.getLocation=Austin",
      function(error, response, body) {
        if (!error && response.statusCode == 200) {
          const data = JSON.parse(body);
          res.json(data);
          const countPython = (
            body
              .toString()
              .toLowerCase()
              .match(/python/g) || []
          ).length;
          console.log("python count " + countPython);
          const countRuby = (
            body
              .toString()
              .toLowerCase()
              .match(/ruby/g) || []
          ).length;
          console.log("ruby count " + countRuby);
          const countScala = (
            body
              .toString()
              .toLowerCase()
              .match(/scala/g) || []
          ).length;
          console.log("scala count " + countScala);
          const countJavascript = (
            body
              .toString()
              .toLowerCase()
              .match(/javascript/g) || []
          ).length;
          console.log("javascript count " + countJavascript);
          const counthtml = (
            body
              .toString()
              .toLowerCase()
              .match(/html/g) || []
          ).length;
          console.log("html count " + counthtml);
          const countreact = (
            body
              .toString()
              .toLowerCase()
              .match(/react/g) || []
          ).length;
          console.log("react count " + countreact);
          const countAngular = (
            body
              .toString()
              .toLowerCase()
              .match(/angular/g) || []
          ).length;
          console.log("angular count " + countAngular);
          // python count 8
          // ruby count 0
          // scala count 2
          // javascript count 19
          // html count 36
          // react count 6
          // angular count 2
        }
      }
    );
  });

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
