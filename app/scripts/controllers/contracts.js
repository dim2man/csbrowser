define(['app', 'exContracts'], function(app, testData) {
  'use strict';

  app.module.controller(app.controllers.contracts.name, ['$scope', app.services.clearspending.name,
    function($scope, cs) {
      // cs.contracts({
      //   page: 1,
      //   perpage: 20,
      //   customerregion: 65
      // }).success(parseContracts);

      function parseContracts(data) {
        if (typeof data === 'object') {
          data = data.contracts;
        } else {
          // TODO error
        }
        $scope.contracts = data;
        $scope.$digest();
      }

      setTimeout(parseContracts.bind(this, testData), 200);

      $scope.contracts = 'Receiving contracts';
    }
  ]);
});
