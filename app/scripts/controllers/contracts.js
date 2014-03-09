define(['app', 'exContracts', 'util/alert', 'jquery'], function(app, testData, alert, $) {
  'use strict';

  app.module.controller(app.controllers.contracts.name, ['$scope', app.services.clearspending.name,
    function($scope, cs) {

      $scope.filterSummary = '';

      $scope.filter = {
        okdp: '',
        customerregion: '',
        daterange: '',
        pricerange: '',
        perpage: '20',
        customerinn: '',
        customerkpp: '',
        supplierinn: '',
        supplierkpp: ''
      };

      var dismissReceiving;

      $scope.refresh = function() {
        dismissReceiving = alert.info('Receiving contracts');
        // console.log(JSON.stringify($scope.filter));
        cs.contracts($.extend({}, $scope.filter, {
          page: 1
        })).success(parseContracts);
        // setTimeout(parseContracts.bind(this, testData), 2000);
      };

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
    }
  ]);
});
