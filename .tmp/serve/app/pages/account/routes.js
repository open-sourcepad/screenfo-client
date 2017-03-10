(function() {
  angular.module('client').config([
    '$stateProvider', '$locationProvider', '$urlRouterProvider', function($stateProvider, $locationProvider, $urlRouterProvider) {
      $locationProvider.html5Mode(true);
      return $stateProvider.state('account', {
        url: '/account',
        templateUrl: 'app/pages/account/index.html',
        controller: 'AccountCtrl',
        abstract: true
      }).state('account.settings', {
        url: '/settings',
        templateUrl: 'app/pages/account/settings/index.html',
        controller: 'SettingsCtrl'
      });
    }
  ]);

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYWNjb3VudC9yb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzIjpbInBhZ2VzL2FjY291bnQvcm91dGVzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLE9BQU8sQ0FBQyxNQUFSLENBQWUsUUFBZixDQUF3QixDQUFDLE1BQXpCLENBQWdDO0lBQzlCLGdCQUQ4QixFQUNiLG1CQURhLEVBQ08sb0JBRFAsRUFFOUIsU0FBQyxjQUFELEVBQWdCLGlCQUFoQixFQUFrQyxrQkFBbEM7TUFFRSxpQkFBaUIsQ0FBQyxTQUFsQixDQUE0QixJQUE1QjthQUVBLGNBQ0UsQ0FBQyxLQURILENBQ1MsU0FEVCxFQUVJO1FBQUEsR0FBQSxFQUFLLFVBQUw7UUFDQSxXQUFBLEVBQWEsOEJBRGI7UUFFQSxVQUFBLEVBQVksYUFGWjtRQUdBLFFBQUEsRUFBVSxJQUhWO09BRkosQ0FPRSxDQUFDLEtBUEgsQ0FPUyxrQkFQVCxFQVFJO1FBQUEsR0FBQSxFQUFLLFdBQUw7UUFDQSxXQUFBLEVBQWEsdUNBRGI7UUFFQSxVQUFBLEVBQVksY0FGWjtPQVJKO0lBSkYsQ0FGOEI7R0FBaEM7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCdjbGllbnQnKS5jb25maWcgW1xyXG4gICckc3RhdGVQcm92aWRlcicsJyRsb2NhdGlvblByb3ZpZGVyJywnJHVybFJvdXRlclByb3ZpZGVyJ1xyXG4gICgkc3RhdGVQcm92aWRlciwkbG9jYXRpb25Qcm92aWRlciwkdXJsUm91dGVyUHJvdmlkZXIpIC0+XHJcblxyXG4gICAgJGxvY2F0aW9uUHJvdmlkZXIuaHRtbDVNb2RlKHRydWUpXHJcblxyXG4gICAgJHN0YXRlUHJvdmlkZXJcclxuICAgICAgLnN0YXRlICdhY2NvdW50JyxcclxuICAgICAgICB1cmw6ICcvYWNjb3VudCdcclxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9wYWdlcy9hY2NvdW50L2luZGV4Lmh0bWwnXHJcbiAgICAgICAgY29udHJvbGxlcjogJ0FjY291bnRDdHJsJ1xyXG4gICAgICAgIGFic3RyYWN0OiB0cnVlXHJcblxyXG4gICAgICAuc3RhdGUgJ2FjY291bnQuc2V0dGluZ3MnLFxyXG4gICAgICAgIHVybDogJy9zZXR0aW5ncycsXHJcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvcGFnZXMvYWNjb3VudC9zZXR0aW5ncy9pbmRleC5odG1sJ1xyXG4gICAgICAgIGNvbnRyb2xsZXI6ICdTZXR0aW5nc0N0cmwnXHJcbl1cclxuIl19
