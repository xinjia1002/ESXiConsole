(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('session', ['localStorage', session]);

    function session(localStorage) {

        //Keep the vim.ObjectSpec over here

        var USERKEY = 'utoken';
        var session = {};

        var initialize = function () {
            //check the cache
            var localUser = localStorage.get(USERKEY);
            if (localUser) {
                setSession(localUser);
            }
        };


        var setSession = function(data){

            localStorage.remove(USERKEY);
            session = {};

            if (angular.isDefined(data)){
                session.SID = data.SID;
                localStorage.add(USERKEY, session);
            }
        };

        var destroySession = function(){
            setSession();
        };

        initialize();

        var s = {
            setSession:setSession,
            destroySession:destroySession,
            get currentSession() {
                return session;
            },
            get isLogin(){
                if (angular.isDefined(session) && typeof session.SID !== 'undefined')
                    return true;
                else
                    return false;
            }
        };
        return s;

    }

})();
