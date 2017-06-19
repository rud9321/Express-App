var express = require('express');
var router = express.Router();
var studentApi = require('../models/studentModel');

router.get('/student', function (req, res, next) {
    studentApi.find({}).then(function (data) {
        res.send(data);
    }).catch(next);
});

router.post('/student', function (req, res, next) {
    studentApi.create(req.body).then(function (data) {
        res.send(data);
    }).catch(next);
});

router.put('/student/:id', function (req, res, next) {
    studentApi.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function () {

        studentApi.findOne({ _id: req.params.id }).then(function (data) {
            res.send(data);
        });

    }).catch(next);
});

router.delete('/student/:id', function (req, res, next) {
    studentApi.findByIdAndRemove({ _id: req.params.id }, req.body).then(function (data) {
        res.send(data);
    }).catch(next);
});

module.exports = router;