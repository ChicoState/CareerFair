var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors'); 

var index = require('./routes/index');
var tasks = require('./routes/tasks');
var companies = require('./routes/companies'); 

var port = 3000;

var app = express();


app.use(cors()); 



// View Engine
app.set('src', path.join(__dirname, 'client/src'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Set Static folder
app.use(express.static(path.join(__dirname, 'client')));

// Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);

app.use('/api', tasks);
app.use('/api', companies);

app.listen(port, function(){
    console.log('Server started on port ' + port);
});
