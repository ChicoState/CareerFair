var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://mesa:mesa@ds133450.mlab.com:33450/companieslist', ['volunteers']);

// Get All Tasks
router.get('/volunteers', function(req, res, next){
    db.volunteers.find(function(err, volunteers){
        if(err){
            res.send(err);
        }else {
            res.json(volunteers);
        }
    });
});

// Get Single Task
router.get('/volunteer/:id', function(req, res, next){
    db.volunteers.findOne({_id: mongojs.ObjectId(req.params.id)},function(err, volunteer){
        if(err){
            res.send(err);
        }else {
            res.json(volunteer);
        }
    });
});


// Save Task
router.post('/volunteer', function(req, res, next){
    var volunteer = req.body;
        res.status(400);
		if(!volunteer.firstName || !volunteer.lastName || !volunteer.email || !volunteer.beginTime || !volunteer.endTime || !volunteer.position){
        res.json({
            "error": "Bad Data"
        });
    }else {
        db.volunteers.save(volunteer, function(err, volunteer){
            if(err){
                res.send(err);
            }else {
                res.json(volunteer);
            }
        });
    }
});

/*
// Delete Task
router.delete('/company/:id', function(req, res, next){
    db.companies.remove({_id: mongojs.ObjectId(req.params.id)},function(err, company){
        if(err){
            res.send(err);
        }else {
            res.json(company);
        }
    });
});

// Update Task
router.put('/company/:id', function(req, res, next){
    var company = req.body;
    var updTask = {};

    if(company.isDone){
        updTask.isDone = company.isDone;
    }

    if(company.title){
        updTask.title = company.title;
    }

    if(!updTask){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    }else {
        db.companies.update({_id: mongojs.ObjectId(req.params.id)},updTask, {}, function(err, company){
        if(err){
            res.send(err);
        }else {
            res.json(company);
        }
    });
    }
});

*/
module.exports = router;
