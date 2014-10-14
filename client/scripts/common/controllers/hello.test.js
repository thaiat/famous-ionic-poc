'use strict';

var angular = require('angular-mocks');
var app = require('../')('app');
var controllername = 'hello';
describe(app.name, function() {

    describe('Controllers', function() {

        describe('hello', function() {

            beforeEach(function() {
                angular.mock.module(app.name);
            });

            beforeEach(inject(function($injector) {
                this.$controller = $injector.get('$controller');
                this.$scope = $injector.get('$rootScope').$new();
                this.controller = this.$controller(app.name + '.' + controllername + ' as vm', {
                    '$scope': this.$scope
                });
            }));

            it('should be defined', function() {
                expect(this.controller).toBeDefined();
            });

        });
    });
});