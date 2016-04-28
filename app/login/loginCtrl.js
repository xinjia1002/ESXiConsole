(function () {
    'use strict';

    angular
        .module('app.login')
        .controller('loginCtrl', ['$routeParams', 'vimService', loginCtrl]);

    function loginCtrl($routeParams, vimService){
        var vm = this;
        vm.login = login;
        //vm.username = "";
        //vm.password = "";
        //vm.user = session.currentSession;
        //vm.message = '';
        //vm.isSpinning = false;


        function activate(){
            //if ($routeParams.premiseOID && $routeParams.sessionID){
            //    var pOid = $routeParams.premiseOID;
            //    var sid = $routeParams.sessionID;
            //    if (sid && pOid){
            //        authService.getSessionBySID(sid).then(function(data){
            //            //Session is set
            //            $location.path('/siteMap/' + pOid);
            //        })
            //    }
            //    else{
            //        $location.path('/login');
            //    }
            //}
        }

        function showBusy(isBusy){
            vm.isSpinning = typeof isBusy === 'undefined'? true:isBusy;
        };

        function login(form){
            //if (form.$valid){
            //    vm.message = '';
            //    showBusy();
            //    authService.getSession(vm.username, vm.password).then(function(data){
            //        //success
            //        vm.username = vm.password = "";
            //        showBusy(false);
            //        requestConfig.redirectPostLogin();
            //    }).catch(function(e){
            //        showBusy(false);
            //        vm.message = e.message;
            //    });
            //    form.$setUntouched();
            //}

            vimService.authenticate();
        }

        activate();
    }



})();
