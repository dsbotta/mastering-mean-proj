exports.render = function(req, res) {

	if(req.session.lastVisit) {
		console.log(req.ip, process.env.NODE_ENV, req.session.lastVisit);
	}

	req.session.lastVisit = new Date();

	res.render('index', {
		title: "Hello World"
	});
};