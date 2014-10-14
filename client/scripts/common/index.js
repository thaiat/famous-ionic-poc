'use strict';
require('angular-ionic');
require('famous-angular');

var modulename = 'common';

module.exports = function(namespace) {

    var fullname = namespace + '.' + modulename;

    var angular = require('angular');
    var app = angular.module(fullname, ['ionic', 'famous.angular']);
    // inject:folders start
    require('./controllers')(app);

    // inject:folders end
    return app;
};