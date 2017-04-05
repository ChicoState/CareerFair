var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors'); 
var multer = require('multer'); 


var index = require('./routes/index');
var tasks = require('./routes/tasks');
var companies = require('./routes/companies'); 

var port = 3000;

var app = express();


app.use(cors()); 



// Working with Multer 
var storage = multer.diskStorage({ 
	destination: function(req, file, cb) { 
		cb(null, './client/src/uploads'); 
	},
	filename: function(req, file, cb) { 
		var datetimestamp = Date.now(); 
		cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1]); 
	}
}); 

var upload = multer({ 
		storage: storage
	}).single('file'); 


app.post('/upload', function(req, res) { 
	upload(req, res, function(err) { 
		console.log(req.file); 
		if(err) 
		{
			res.json({error_code:1, err_desc:err}); 
			return; 
		}
		res.json({error_code:0, err_desc:null}); 
	}); 	
}); 

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
