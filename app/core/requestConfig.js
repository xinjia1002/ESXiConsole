(function () {
    'use strict';

    var core = angular.module('app.core');

    core.factory('requestConfig', ['$q', '$location', 'session', requestConfig]);

        function requestConfig($q, $location, session){
            var lastPath = "/";
            var reqCfg = {
                request:request,
                responseError: responseError,
                redirectPostLogin:redirectPostLogin
            }
            return reqCfg;


            function request(config){
                if (session.isLogin){
                    //Put the header we may need to send with vim.ObjectSpec
                }
                return $q.when(config);
            }

            function responseError(response){
                //401 Unauthorized, 403 Forbidden, 405 Method not allowed
                if (response.status == 401 || response.status == 403 || response.status == 405){
                    lastPath = $location.path() == '/login'? lastPath:$location.path();
                    session.destroySession();
                }
                return $q.reject(response);
            }

            function redirectPostLogin(){
                $location.path(lastPath);
                lastPath = "/";
            }

        }


})();
