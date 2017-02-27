'use strict';

module.exports = function(app) {
	app.get('/myaccount', function (req, res) {
	    res.send('this is my customer routes');
	});
};
