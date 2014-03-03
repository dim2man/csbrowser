require.config({
  baseUrl: "scripts",
  paths: {
    angular: "../bower_components/angular/angular",
    angularRoute: "../bower_components/angular-route/angular-route"
  },
  shim: {
    angular: {
      exports: "angular"
    },
    angularRoute: {
      deps: ["angular"]
    }
  },
  priority: ['angular']
});

// this tells angular to defer its bootstrap
window.name = 'NG_DEFER_BOOTSTRAP!';

require(["angular", "app", "controllers/main"], function(angular, app) {
  angular.element(document.body).ready(function() {
    angular.resumeBootstrap([app.name]);
  });
});
