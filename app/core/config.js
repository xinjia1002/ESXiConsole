(function () {
    'use strict';

    var core = angular.module('app.core');

    //Configurations for vsphere
    core.config(['vsphere', function(vsphere){

    }]);

    //Add the interception to append the SID
    core.config(['$httpProvider',function ($httpProvider) {
        $httpProvider.interceptors.push("requestConfig");
    }]);

})();
