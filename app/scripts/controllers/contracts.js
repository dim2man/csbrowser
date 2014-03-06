define(['app', 'exContracts', 'util/alert'], function(app, testData, alert) {
  'use strict';

  app.module.controller(app.controllers.contracts.name, ['$scope', app.services.clearspending.name,
    function($scope, cs) {

      // cs.contracts({
      //   page: 1,
      //   perpage: 20,
      //   customerregion: 52
      // }).success(parseContracts);

      $scope.columns = [{
        displayName: 'ID',
        name: 'id'
      }, {
        displayName: 'Reg #',
        name: 'regNum'
      }, {
        displayName: 'Price',
        name: 'price'
      }, {
        displayName: 'Sign Date',
        name: 'signDate'
      }, ];

      function parseContracts(data) {
        if (typeof data === 'object') {
          data = data.contracts;
        } else {
          alert.err(data);
          return;
        }
        alert.info('Received ' + data.data.length + ' records from ' + data.total + ' total');
        $scope.contracts = data;
        $scope.$digest();
      }

      setTimeout(parseContracts.bind(this, testData), 200);

      alert.info('Receiving contracts');

    }
  ]);
});
