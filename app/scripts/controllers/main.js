define(["app"], function(app) {
  'use strict';

  var mainCtrl = app.controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

  return mainCtrl;
})
