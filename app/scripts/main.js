require.config({
  baseUrl: 'scripts',
  paths: {
    requirejs: '../bower_components/requirejs/require',
    bootstrap: '../bower_components/bootstrap/dist/js/bootstrap',
    'angular-route': '../bower_components/angular-route/angular-route',
    'angular-resource': '../bower_components/angular-resource/angular-resource',
    'angular-mocks': '../bower_components/angular-mocks/angular-mocks',
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
      angular.resumeBootstrap([app.name]);
    });
  }

  // load all app controllers
  // require(app.getAllScripts(), function() {
    continueNgBootstrap();
  // });

});
