const express = require("express");
const path = require('path');
const request = require('request');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('test')
});

app.get('/api', function(req, res) { 
    request("https://authenticjobs.com/api/?api_key=63bc8064b1c91080cba959a745b85175&format=json&method=aj.jobs.search&keywords=php,mysql&perpage=1",
            function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var data = JSON.parse(body);    
            res.json(data)
            console.log(data);
        };
    })             
});  
           

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));