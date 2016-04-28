
(function(){
  'use strict';

  // Declare app level module which depends on views, and components
  var app =angular
      .module('app', [
          'app.core',
          'app.services',
          'app.login',
          'app.summary'
      ])
      .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/login',{
              templateUrl:'login/login.html',
              controller:'loginCtrl',
              controllerAs:'vm'
            })
            .otherwise({redirectTo: '/login'});
      }])

      //.run(['$route', '$rootScope', '$location', function ($route, $rootScope, $location) {
      //  var original = $location.path;
      //  $location.path = function (path, reload) {
      //    if (reload === false) {
      //      var lastRoute = $route.current;
      //      var un = $rootScope.$on('$locationChangeSuccess', function () {
      //        $route.current = lastRoute;
      //        un();
      //      });
      //    }
      //    return original.apply($location, [path]);
      //  };
      //}])


})();