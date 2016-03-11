var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tripPlannerStatic');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error:'));

var placeSchema = new mongoose.Schema({
	address: {type: String, required: true},
	city: {type: String, required: true},
	state: {type: String, required: true},
	phone: {type: String, required: true},
	location: [Number]
});

var hotelSchema = new mongoose.Schema({
	name: {type: String, required: true},
	place: [{type: mongoose.Schema.Types.ObjectId, ref: 'Place'}],
	num_stars: {type: Number, required: true},
	amenities: [String]
});

var activitySchema = new mongoose.Schema({
	name: {type: String, required: true},
	place: [{type: mongoose.Schema.Types.ObjectId, ref: 'Place'}],
	age_range: {type: String}
});

var restaurantSchema = new mongoose.Schema({
	name: {type: String, required: true},
	place: [{type: mongoose.Schema.Types.ObjectId, ref: 'Place'}],
	cuisine: [String],
	price: {type: Number, required: true}
});


var Place = mongoose.model('Place', placeSchema);
var Hotel = mongoose.model('Hotel', hotelSchema);
var Activity = mongoose.model('Activity', activitySchema);
var Restaurant = mongoose.model('Restaurant', restaurantSchema);


module.exports = {
	Place: Place,
	Hotel: Hotel,
	Activity: Activity,
	Restaurant: Restaurant
}
