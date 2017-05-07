var express = require('express');
var path = require('path');
var fs = require( 'fs' );
var bodyParser = require('body-parser');
var cors = require('cors'); 
var multer = require('multer'); 


var index = require('./routes/index');
var tasks = require('./routes/tasks');
var companies = require('./routes/companies'); 
var volunteers = require('./routes/volunteers'); 
var parallel = require('parallel-download');
var archiver = require('archiver'); 

var port = 3000;

var app = express();


//app.use(cors()); 


//Allow cross origin requests 

app.use(function(req, res, next) { 
	res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET"); 
	res.header("Access-Control-Allow-Origin", "http://localhost:3000", "http://localhost:3000/upload", "http://localhost:3001","http://localhost:3001/upload"); 
	res.header("Access-Control-Allow-Origin", "http://localhost:3001"); 

	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); 
	res.header("Access-Control-Allow-Credentials", true); 
	next(); 
});

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

app.get('/download', function(req, res){
	var archive = archiver('zip');	
	archive.on('end', function() { 
		console.log('Archive wrote %d bytes', archive.pointer()); 
	});
	
	archive.on('error', function(err) { 
		throw err;
	});

	res.attachment('resumes.zip'); 
	
	archive.pipe(res); 

	
	var directories = [__dirname + '/client/src/uploads']; 
	//archive.directory(downloadingPath); 
	for(var i in directories)
	{
		archive.directory(directories[i], directories[i].replace(__dirname + '/client/src/uploads', '')); 
	}	

	archive.finalize(); 
//	res.download(theZipDirectory); 
	/*
	fs.readdir(downloadingPath, function( err, files ) { 
		if( err ){ 
			console.error("Could not list the directory.", err); 
			process.exit(1); 
		}
		var array = []; 

		files.forEach(function (file, index) { 
			var fromPath = path.join(downloadingPath, file); 
			archive.append(fs.createReadStream(fromPath), { name: 'fromPath' }); 
			
			  res.download(fromPath, function(err) { 
					if(err) 
					{
						console.log("error"); 
					}
					else 
					{
						console.log("success");
					}
				
		});
	});
				*/
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
app.use('/api', volunteers);

app.listen(port, function(){
    console.log('Server started on port ' + port);
});
