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
        displayName: 'Customer',
        name: 'customer.fullName'
      }, {
        displayName: 'Product',
        name: 'products.product.name'
      }, {
        displayName: 'Price',
        name: 'price'
      }, {
        displayName: 'Supplier Name',
        name: 'suppliers.supplier.organizationName'
      }, {
        displayName: 'Sign Date',
        name: 'signDate'
      }, ];

      function parseContracts(data) {
        dismissReceiving();
        if (typeof data === 'object') {
          data = data.contracts;
        } else {
          alert.err(data);
          return;
        }
        alert.info('Received ' + data.data.length + ' records from ' + data.total + ' total', 2000);
        $scope.contracts = data;
        $scope.$digest();
      }

      setTimeout(parseContracts.bind(this, testData), 2000);

      var dismissReceiving = alert.info('Receiving contracts');

    }
  ]);
});
