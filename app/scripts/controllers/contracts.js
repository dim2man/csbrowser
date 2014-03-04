require(['app'], function(app) {
  'use strict';

  app.controller(app.controllers.contracts.name, function ($scope) {
    $scope.contracts = [];
  });

});
