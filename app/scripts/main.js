require.config({
  baseUrl: 'scripts',
  paths: {
    requirejs: '../bower_components/requirejs/require',
    less: '../bower_components/less/dist/less-1.7.0',
    json3: '../bower_components/json3/lib/json3.min',
    'es5-shim': '../bower_components/es5-shim/es5-shim',
    bootstrap: '../bower_components/bootstrap/dist/js/bootstrap',
    'angular-scenario': '../bower_components/angular-scenario/angular-scenario',
    'angular-sanitize': '../bower_components/angular-sanitize/angular-sanitize',
    'angular-route': '../bower_components/angular-route/angular-route',
    'angular-resource': '../bower_components/angular-resource/angular-resource',
    'angular-mocks': '../bower_components/angular-mocks/angular-mocks',
    'angular-cookies': '../bower_components/angular-cookies/angular-cookies',
    angular: '../bower_components/angular/angular',
    jquery: '../bower_components/jquery/dist/jquery'
  },
  shim: {
    angular: {
      deps: [
        'jquery'
      ],
      exports: 'angular'
    },
    'angular-route': {
      deps: [
        'angular'
      ]
    },
    'angular-resource': {
      deps: [
        'angular'
      ]
    },
    bootstrap: {
      deps: [
        'jquery'
      ]
    }
  },
  priority: [
    'angular'
  ]
});

// this tells angular to defer its bootstrap
window.name = 'NG_DEFER_BOOTSTRAP!';

require(['angular', 'app'], function(angular, app) {
  'use strict';

  function continueNgBootstrap() {
    angular.element(document.body).ready(function() {
      angular.resumeBootstrap([app.module.name]);
    });
  }

  // load all app controllers
  require(app.getAllScripts(), function() {
    continueNgBootstrap();
  });

});
