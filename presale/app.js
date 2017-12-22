var express = require('express');
var app = express();
var cors = require('cors');
app.use(cors());
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

require('./routes')(app);

app.listen(4000, function(){
    console.log('Listening on port 4000!');
});

