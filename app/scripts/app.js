define('app', ['jquery', 'angular', 'angular-route', 'angular-resource'], function($, angular) {
  'use strict';

  // create module
  var module = angular.module('csBrowser', [
    'ngRoute', 'ngResource'
  ]);

  // define all app services
  var services = {
    clearspending: {}
  };

  // generate app services naming data by naming convension
  for (var svc in services) {
    services[svc].name = svc + 'Service';
    services[svc].script = 'services/' + svc;
  }

  // define all module controllers
  var controllers = {
    contracts: {
      deflt: true
    }
  };

  // generate routing and naming data for controllers by naming convention
  for (var ctrl in controllers) {
    controllers[ctrl].view = 'views/' + ctrl + '.html';
    controllers[ctrl].hash = '/' + ctrl;
    controllers[ctrl].name = ctrl + 'Ctrl';
    controllers[ctrl].script = 'controllers/' + ctrl;
  }

  // configure routing
  module.config(function($routeProvider) {
    var defaultCtrl = null;
    $.each(controllers, function(ctrlKey, ctrl) {
      if (ctrl.deflt || defaultCtrl === null) {
        defaultCtrl = ctrl;
      }
      $routeProvider.when(ctrl.hash, {
        templateUrl: ctrl.view,
        controller: ctrl.name
      });
    });
    $routeProvider.otherwise({
      redirectTo: defaultCtrl.hash
    });
  });

  // helper function for $.map to return script file path of an object
  function getScript(obj) {
    return obj.script;
  }

  return {
    module: module,
    controllers: controllers,
    services: services,
    getAllScripts: function() {
      return $.map(services, getScript).concat($.map(controllers, getScript));
    }
  };
});
