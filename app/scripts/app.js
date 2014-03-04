define('app', ['jquery', 'angular', 'angular-route'], function($, angular) {
  'use strict';

  // create module
  var app = angular.module('app', [
    'ngRoute'
  ]);

  // define all app services
  app.services = {
    clearspending: {}
  };

  // generate app services naming data by naming convension
  for (var svc in app.services) {
    app.services[svc].name = svc + 'Service';
    app.services[svc].script = 'services/' + svc;
  }

  // define all module controllers
  app.controllers = {
    contracts: {
      deflt: true
    }
  };

  // generate routing and naming data for controllers by naming convention
  for (var ctrl in app.controllers) {
    app.controllers[ctrl].view = 'views/' + ctrl + '.html';
    app.controllers[ctrl].hash = '/' + ctrl;
    app.controllers[ctrl].name = ctrl + 'Ctrl';
    app.controllers[ctrl].script = 'controllers/' + ctrl;
  }

  // provide a function returning all dependent scripts
  app.getDependentScripts = function() {
    return $.map(app.services, getScript).concat($.map(app.controllers, getScript));
  };

  function getScript(obj) {
    return obj.script;
  }

  // configure routing
  app.config(function($routeProvider) {
    var defaultCtrl = null;
    $.each(app.controllers, function(ctrlKey, ctrl) {
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

  return app;
});
