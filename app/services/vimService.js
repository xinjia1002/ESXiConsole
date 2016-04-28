(function () {
    'use strict';

    angular
        .module('app.services')
        .factory('vimService', ['$http', 'vsphere', vimService]);

    function vimService($http, vsphere) {

        return {

        //var _vsphere2 = _interopRequireDefault(_vsphere);
        //
        //function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

            authenticate: function(){

                vsphere.vimService("localhost:63342").then(function (service) {
                    var propertyCollector = service.serviceContent.propertyCollector,
                        rootFolder = service.serviceContent.rootFolder,
                        sessionManager = service.serviceContent.sessionManager,
                        viewManager = service.serviceContent.viewManager,
                        vim = service.vim,
                        vimPort = service.vimPort;
                    return vimPort.login(sessionManager, "root", "pass").then(function () {
                        return vimPort.createContainerView(viewManager, rootFolder, ["ManagedEntity"], true);
                    }).then(function (containerView) {
                        return vimPort.retrievePropertiesEx(propertyCollector, [vim.PropertyFilterSpec({
                            objectSet: vim.ObjectSpec({
                                obj: containerView,
                                skip: true,
                                selectSet: vim.TraversalSpec({
                                    path: "view",
                                    type: "ContainerView"
                                })
                            }),
                            propSet: vim.PropertySpec({
                                type: "VirtualMachine",
                                pathSet: ["name"]
                            })
                        })], vim.RetrieveOptions());
                    }).then(function (result) {
                        result.objects.forEach(function (item) {
                            console.log(item.propSet[0].val);
                        });
                        return vimPort.logout(sessionManager);
                    });
                }).catch(function (err) {
                    console.log(err.message);
                })

            },

            getSession:function(username, password){
                var url = APP_CONFIG.url + WEB_SERVICE.GET_SESSION + "?userid=" + username + "&password=" + password + "&appname=webportal&extradata=nothing";
                return $http.get(url)
                    .then(function (response) {
                        session.setSession(response.data);
                        $rootScope.$broadcast(APP_EVENT.LOGIN_SUCCESS);
                        return response.data;
                    })
                    .catch(function (message) {
                        $rootScope.$broadcast(APP_EVENT.LOGIN_FAILED);
                        logger.error('[authService]', message);
                        return $q.reject(new Error(message.data.Msg) );
                    });
            },

            getSessionBySID:function(sid){
                var url = APP_CONFIG.url + WEB_SERVICE.GET_SESSION_BY_SID + "?SID=" + sid;
                return $http.get(url)
                    .then(function (response) {
                        session.setSession(response.data);
                        $rootScope.$broadcast(APP_EVENT.LOGIN_SUCCESS);
                        return response.data;
                    })
                    .catch(function (message) {
                        $rootScope.$broadcast(APP_EVENT.LOGIN_FAILED);
                        logger.error('[authService]', message);
                        return $q.reject(new Error(message.data.Msg) );
                    });
            },

            setPreference: function(preferenceItems){
                var url = APP_CONFIG.url + WEB_SERVICE.SET_PREFERENCE;

                return $http.post(url, preferenceItems)
                    .then(function (response) {
                        angular.forEach(preferenceItems, function(val, idx){
                           session.updatePreferenceByName(val.Name, val.Value)
                        });
                        return response.data;
                    })
                    .catch(function (response) {
                        $log.error('[setPreference]:', response.data.Msg)
                        return $q.reject(new Error(response.data.Msg) );
                    });
            },

        };

    }

})();
