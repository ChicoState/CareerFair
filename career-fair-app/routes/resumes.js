var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://mesa:mesa@ds133450.mlab.com:33450/companieslist', ['resumes']);

// Get All Tasks
router.get('/resumes', function(req, res, next){
    db.resumes.find(function(err, resumes){
        if(err){
            res.send(err);
        }else {
            res.json(resumes);
        }
    });
});

// Get Single Task
router.get('/resume/:id', function(req, res, next){
    db.resumes.findOne({_id: mongojs.ObjectId(req.params.id)},function(err, resume){
        if(err){
            res.send(err);
        }else {
            res.json(resume);
        }
    });
});


// Save Task
router.post('/resume', function(req, res, next){
    var resume = req.body;
        res.status(400);
		if(!resume.firstName || !resume.lastName || !resume.studentId){
        res.json({
            "error": "Bad Data"
        });
    }else {
        db.resumes.save(resume, function(err, resume){
            if(err){
                res.send(err);
            }else {
                res.json(resume);
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
