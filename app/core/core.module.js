(function(){
    "use strict";

    var core = angular
        .module('app.core', [
        //Angular modules
        'ngRoute', 'ngMaterial'
    ])

    function bootstrapApplication(){
        angular.element(document).ready(function(){
            angular.bootstrap(document, ['app']);
        })
    }

    function activate(){
        bootstrapApplication();
    }

    //start the application
    activate();


})();