'use strict';

module.exports = function(app) {
    // inject:start
    require('./hello')(app);
    // inject:end
};