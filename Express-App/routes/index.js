var express = require('express');
var router = express.Router();
var os = require('os');

/* GET home page. */
router.get('/', function (req, res, next) {

    var cpus = os.cpus();
    var network =os.networkInterfaces();
    for (var dev in network) {
    network[dev].filter((details) => details.family === 'IPv4' && details.internal === false ? address = details.address: undefined);
    }   
    res.render('index', { title: 'Rudra', operating_system: cpus[0].model,speed:cpus[0].speed,hostname:os.hostname(),addres:address  });
});

module.exports = router;
