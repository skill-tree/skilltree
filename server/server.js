const express = require("express");
const path = require('path');
const request = require('request');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/', (req, res) => {
  res.send('test')
});

app.get('/jobs', function(req, res) { 
    request("https://authenticjobs.com/api/?api_key=63bc8064b1c91080cba959a745b85175&format=json&method=aj.jobs.search&keywords=developer&perpage=100",
            function (error, response, body) {
                
        if (!error && response.statusCode == 200) {
            var data = JSON.parse(body);    
            res.json(data)
            console.log(data);
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
              const countQqq = (
                body
                  .toString()
                  .toLowerCase()
                  .match(/qqq/g) || []
              ).length;
              console.log("qqq count " + countQqq);
              // python count 8
              // ruby count 0
              // scala count 2
              // javascript count 19
              // html count 36
              // react count 6
              // angular count 2
            
        };
    })             
});  

app.get('/udemy', function(req, res) { 
    res.set({
        "Authorization": "Basic bDVKOWtMNG9pdjh6TlpZZ2dKekNYVm5icEZGT1FJSkhoSnUybU52RzpZYlc1ZDIzejZIQTV6c2QyVGYyYXRBNURKVXl3WkFYWlRsNlhtRjJQNENKazRPSk9yMTB0em9XZFdkS01La1g2RmRNY091THNtY2FtSG9QMUZCYTNBSERBOHlHT3E3RFhKTE1VdTA0WjdCSWFUS25LSUQ1djl0U0JNSWdvSzRYTw==",
        "Accept": "application/json, text/plain, */*"
      })
    request("https://www.udemy.com/api-2.0/courses/?page=2&page_size=12&ratings=4&search=html",
            function (error, response, body) {

        if (!error && response.statusCode == 200) {
            var udata = JSON.parse(body);    
            res.json(udata)
            console.log(udata);

            
        };
    })             
});  

//curl --user l5J9kL4oiv8zNZYggJzCXVnbpFFOQIJHhJu2mNvG:YbW5d23z6HA5zsd2Tf2atA5DJUywZAXZTl6XmF2P4CJk4OJOr10tzoWdWdKMKkX6FdMcOuLsmcamHoP1FBa3AHDA8yGOq7DXJLMUu04Z7BIaTKnKID5v9tSBMIgoK4XO https://www.udemy.com/api-2.0/courses
//id: 	l5J9kL4oiv8zNZYggJzCXVnbpFFOQIJHhJu2mNvG    
//secret: YbW5d23z6HA5zsd2Tf2atA5DJUywZAXZTl6XmF2P4CJk4OJOr10tzoWdWdKMKkX6FdMcOuLsmcamHoP1FBa3AHDA8yGOq7DXJLMUu04Z7BIaTKnKID5v9tSBMIgoK4XO        

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));