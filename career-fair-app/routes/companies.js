var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://mesa:mesa@ds133450.mlab.com:33450/companieslist', ['companies']);

// Get All Tasks
router.get('/companies', function(req, res, next){
    db.companies.find(function(err, companies){
        if(err){
            res.send(err);
        }else {
            res.json(companies);
        }
    });
});

// Get Single Task
router.get('/company/:id', function(req, res, next){
    db.companies.findOne({_id: mongojs.ObjectId(req.params.id)},function(err, company){
        if(err){
            res.send(err);
        }else {
            res.json(company);
        }
    });
});


// Save Task
router.post('/company', function(req, res, next){
    var company = req.body;
    if(!company.contactName || !company.contactEmail || !company.contactPhoneNumber || !company.companyWebsite || !company.companyDescription || !company.registrationType || !company.desiredPositions || !company.desiredMajors || !company.moneyOwed || !company.confirmation ){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    }else {
        db.companies.save(company, function(err, company){
            if(err){
                res.send(err);
            }else {
                res.json(company);
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
