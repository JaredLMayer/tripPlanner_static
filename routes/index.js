var router = require('express').Router(),
		Promise = require('bluebird'),
		Places = require('../models/index').Place,
		Hotel = require('../models/index').Hotel,
		Activity = require('../models/index').Activity,
		Restaurant = require('../models/index').Restaurant;

router.get('/', function(req, res, next){
	var info = [Hotel.find({}), Activity.find({}), Restaurant.find({})]
	Promise.all(info).then(function(results){
		// res.send('index', {Hotels: results[0], Activities: results[1], Restaurant: results[2]})
		res.render('index', {Hotels: results[0], Restaurants: results[1], Activities: results[2]});
	});
});










module.exports = router;