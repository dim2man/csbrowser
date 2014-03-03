define('app', ['angular', 'angular-route'], function(angular) {
  'use strict';

  var app = angular.module('app', [
    'ngRoute'
  ]);

  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

  return app;
});
