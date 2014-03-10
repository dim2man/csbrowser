define(['jquery', 'util/alert'], function($, alert) {
  'use strict';

  function ContractsCtrl($scope, cs) {

    $scope.filterSummary = '';

    $scope.filter = {
      okdp: '',
      customerregion: '',
      daterange: '',
      pricerange: '',
      perpage: 20,
      customerinn: '',
      customerkpp: '',
      supplierinn: '',
      supplierkpp: '',
      page: 1
    };

    $scope.perpage = $scope.filter.perpage;

    var dismissReceiving;

    function refresh() {
      dismissReceiving = alert.info('Receiving contracts');
      cs.contracts($scope.filter).success(parseContracts.bind(this, $scope.filter.perpage));
    };

    $scope.applyFilter = function() {
      $scope.filter.perpage = parseInt($scope.filter.perpage, 10);
      if (!($scope.filter.perpage >= 1)) {
        //keep old value
        $scope.filter.perpage = $scope.perpage;
      }
      $scope.filter.page = 1; //request the first page
      refresh();
    };

    $scope.gotoPage = function(page) {
      if (page < 1 || ($scope.contracts && page > Math.ceil($scope.contracts.total / $scope.filter.perpage))) {
        alert.err('wrong page requested: ' + page, 2000);
        return;
      }
      $scope.filter.page = page;
      refresh();
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

    function parseContracts(perpage, data) {
      dismissReceiving();
      $scope.perpage = perpage;
      if (typeof data === 'object') {
        data = data.contracts;
      } else {
        alert.err(data);
        return;
      }
      alert.info('Received ' + data.data.length + ' records from ' + data.total + ' total', 2000);
      $scope.contracts = data;
    }
  }

  ContractsCtrl.$inject = ['$scope', 'clearspendingService'];

  return ContractsCtrl;
});
