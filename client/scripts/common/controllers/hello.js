'use strict';
var controllername = 'hello';

module.exports = function(app) {
    /*jshint validthis: true */

    var deps = ['$famous'];

    function hello($famous) {
        var Transitionable = $famous['famous/transitions/Transitionable'];
        var Easing =  $famous['famous/transitions/Easing'];
        
        var vm = this;
        vm.message = 'Hello Worlds..';
        vm.items = [];
        for(var i = 1; i < 10; i++) {
            var scale = new Transitionable([1, 1, 1]);
            vm.items.push({
                text: 'Box ' + i,
                scale: scale
            });
        }

        vm.click = function(item) {
            item.scale.set([1, 1.5, 1], {
                duration: 10,
                curve: 'linear'
            });
            item.scale.set([1, 1, 1], {
                duration: 500,
                curve: Easing.outBounce
            });
        };

        var activate = function() {

        };
        activate();
    }

    hello.$inject = deps;
    app.controller(app.name + '.' + controllername, hello);
};