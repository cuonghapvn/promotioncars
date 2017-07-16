exports.prefix = '/driver';

//exports.before = function(request, response, next) { next() };

exports.distanceTracking = function(request, response) {
	response.render('driver/distance-tracking', {
		title: 'Distance Tracking'
	});
};
exports.profile = function(request, response) {
	response.render('driver/profile', {
		title: 'Profile'
	});
};