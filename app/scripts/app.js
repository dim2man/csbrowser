define('app', ['jquery', 'angular', 'angular-route', 'angular-resource',
  'controllers/contracts',
  'services/clearspending',
  'filters/bypath',
  'filters/iftrue',
  'filters/tooffset',
  'filters/topages'
], function($, angular, angularRoute, angularResource,
  Contracts,
  ClearSpending,
  ByPath,
  IfTrue,
  ToOffset,
  ToPages) {
  'use strict';

  // create module
  var module = angular.module('csBrowser', [
    'ngRoute', 'ngResource'
  ]);

  // common init func
  function initCommon(obj, nameSuffix, angularInitFunc) {
    for (var p in obj) {
      obj[p].name = p + nameSuffix;
      angularInitFunc.call(module, obj[p].name, obj[p].constructor);
    }
  }

  // define all app filters
  var filters = {
    bypath: {
      constructor: ByPath
    },
    iftrue: {
      constructor: IfTrue
    },
    topages: {
      constructor: ToPages
    },
    tooffset: {
      constructor: ToOffset
    }
  };

  // create filters
  initCommon(filters, '', module.filter);

  // define all app services
  var services = {
    clearspending: {
      constructor: ClearSpending
    }
  };

  // create services
  initCommon(services, 'Service', module.service);

  // define all module controllers
  var controllers = {
    contracts: {
      deflt: true,
      constructor: Contracts
    }
  };

  // create controllers
  initCommon(controllers, 'Ctrl', module.controller);
  // generate routing data for controllers by naming convention
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

  return module;
});
