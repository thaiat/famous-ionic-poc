'use strict';
var controllername = 'hello';

module.exports = function(app) {
    /*jshint validthis: true */

    var deps = ['$scope', '$famous', '$timeout', '$log'];

    function hello($scope, $famous, $timeout, $log) {
        var Transitionable = $famous['famous/transitions/Transitionable'];
        var Easing = $famous['famous/transitions/Easing'];

        var vm = this;
        vm.message = 'Hello World - famous + ionic !!!';
        vm.items = [];
        vm.lastindex = 0;
        var loadItems = function() {
            for(var i = 1; i < 10; i++) {
                var scale = new Transitionable([1, 1, 1]);
                vm.items.push({
                    text: 'Box ' + (i + vm.lastindex),
                    scale: scale
                });

            }
            vm.lastindex += 10 - 1;

        };
        vm.doRefresh = function() {
            $timeout(function() {
                $log.debug('starting a refresh');
                vm.items.forEach(function(item) {
                    item.text += '!';
                });
            }, 100)
                .then(function() {
                    // Stop the ion-refresher from spinning
                    $scope.$broadcast('scroll.refreshComplete');
                });
        };

        vm.loadMore = function() {
            $log.debug('loading more items');
            $timeout(loadItems, 100).then(function() {
                $scope.$broadcast('scroll.infiniteScrollComplete');
            });

        };
        vm.click = function(item) {
            item.scale.set([1.5, 1.5, 1], {
                duration: 10,
                curve: 'linear'
            });
            item.scale.set([1, 1, 1], {
                duration: 400,
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