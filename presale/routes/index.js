const statusRoutes = require('./status');

module.exports = function(app) {
    statusRoutes(app);
};
