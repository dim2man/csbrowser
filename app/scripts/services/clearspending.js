require(['app'], function(app) {
  'use strict';
  app.factory(app.services.clearspending, function($http) {
    return {};
  });
});
/*      var account = 'Mera';
      var userName = 'Mera_apis';
      var secret = 'Mera#1';
      var authKey = 'Basic ' + btoa(userName + ':' + secret);
      var url = 'https://api-sandbox.everyware-cloud.com/v2/';

      var Socket = $.atmosphere;
      var onChangeCallback;

      var request = {};
      request.headers = {
        'Authorization': authKey
      };
      request.enableXDR = true;
      request.withCredentials = true;
      request.dropAtmosphereHeaders = false;
      request.attachHeadersAsQueryString = false;
      request.executeCallbackBeforeReconnect = false;
      request.logLevel = 'debug';
      request.transport = 'long-polling';
      request.fallbackTransport = 'streaming';

      request.onOpen = function(response) {
        console.log('Atmosphere connected using ' + response.transport);
      };

      request.onError = function(response) {
        console.error('Atmosphere detected error ' + response);
      };

      request.onMessage = function(response) {
        console.log('Atmosphere received message ' + response.responseBody);
        try {
          var msg = JSON.parse(response.responseBody);
          if (onChangeCallback) {
            onChangeCallback(msg);
          }
        } catch (e) {}
      };

      function getTransformFunc(prop, def) {
        return function(data) {
          var ret = def === undefined ? [] : def;
          console.log(prop + ' response: ' + data);
          try {
            ret = JSON.parse(data)[prop];
          } catch (e) {}
          return ret;
        };
      }

      return {
        devices: function() {
          return $http({
            method: 'GET',
            url: url + 'devices.json',
            headers: {
              Authorization: authKey
            },
            transformResponse: getTransformFunc('device')
          });
        },
        assets: function() {
          return $http({
            method: 'GET',
            url: url + 'assets.json',
            headers: {
              Authorization: authKey
            },
            transformResponse: getTransformFunc('assetInfo')
          });
        },
        status: {
          onChange: function(callback) {
            onChangeCallback = callback;
          },
          subscribe: function(topic) {
            Socket.unsubscribe();
            request.url = url + 'streams/subscribe.json?topic=' + encodeURIComponent(account + '/' + topic);
            Socket.subscribe(request);
          },
          unsubscribe: function() {
            Socket.unsubscribe();
          }
        },
        messages: {
          count: function(topic) {
            return $http({
              method: 'GET',
              url: url + 'messages/count.json?topic=' + encodeURIComponent(account + '/' + topic),
              headers: {
                Authorization: authKey
              },
              transformResponse: getTransformFunc('count', 0)
            });
          },
          get: function(topic, offset, limit) {
            return $http({
              method: 'GET',
              url: url + 'messages.json?topic=' + encodeURIComponent(account + '/' + topic) + '&offset=' + offset + '&limit=' + limit,
              headers: {
                Authorization: authKey
              },
              transformResponse: getTransformFunc('message')
            });
          }
        }
      };
*/
