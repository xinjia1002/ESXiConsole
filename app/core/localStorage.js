(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('localStorage', ['$window', localStorage]);

    function localStorage($window){

        var store = $window.sessionStorage;
        var localStrorage = {
            add:add,
            get:get,
            remove:remove
        }
        return localStrorage;

        function add(key, value){
            value = angular.toJson(value);
            store.setItem(key, value);
        }

        function get(key){
            var value = store.getItem(key);
            if (value) {
                value = angular.fromJson(value);
            }
            return value;
        }

        function remove(key){
            store.removeItem(key);
        }

    };


})();
