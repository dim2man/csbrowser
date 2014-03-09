define('app', ['jquery', 'angular', 'angular-route', 'angular-resource'], function($, angular) {
  'use strict';

  // create module
  var module = angular.module('csBrowser', [
    'ngRoute', 'ngResource'
  ]);

  // common init func
  function initCommon(obj, nameSuffix, scriptPrefix) {
    for (var p in obj) {
      obj[p].name = p + nameSuffix;
      obj[p].script = scriptPrefix + p;
    }
  }

  // define all app filters
  var filters = {
    bypath: {},
    iftrue: {},
    topages: {},
    tooffset: {}
  };

  // generate app filters naming data by naming convension
  initCommon(filters, '', 'filters/');

  // define all app services
  var services = {
    clearspending: {}
  };

  // generate app services naming data by naming convension
  initCommon(services, 'Service', 'services/');

  // define all module controllers
  var controllers = {
    contracts: {
      deflt: true
    }
  };

  // generate routing and naming data for controllers by naming convention
  initCommon(controllers, 'Ctrl', 'controllers/');
  for (var ctrl in controllers) {
    controllers[ctrl].view = 'views/' + ctrl + '.html';
    controllers[ctrl].hash = '/' + ctrl;
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
    filters: filters,
    getAllScripts: function() {
      return $.map(services, getScript).concat($.map(controllers, getScript)).concat($.map(filters, getScript));
    }
  };
});
