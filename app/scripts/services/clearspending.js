define(['app', 'jquery'], function(app, $) {
  'use strict';
  app.module.factory(app.services.clearspending.name, function($http) {
    var serverUrl = 'https://clearspending.p.mashape.com/v1';
    var commonHeaders = {
      'X-Mashape-Authorization': 'dC4qYTKOvp9E2xVuwqSptEOMrmP8EqTt'
    };

    function buildFilter(filter) {
      return '?' + $.map(filter, function(value, name) {
        return name + '=' + encodeURIComponent(value);
      }).join('&');
    }

    function transformResponse(data) {
      if (typeof data === 'string') {
        if (data.length <= 0) {
          return 'empty response';
        }
        try {
          data = JSON.parse(data);
        } finally {
          // if data cannot be parsed - this may indicate server error returned by string - so just return this string
        }
        return data;
      } else {
        return 'unexpected data type (not a string)';
      }
    }

    return {
      contracts: function(filter) {
        return $http({
          method: 'GET',
          url: serverUrl + '/contracts/select/' + buildFilter(filter),
          headers: commonHeaders,
          transformResponse: transformResponse
        });
      }
    };
  });
});
