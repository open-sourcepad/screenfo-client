(function() {
  angular.module('client').config([
    '$stateProvider', '$locationProvider', '$urlRouterProvider', function($stateProvider, $locationProvider, $urlRouterProvider) {
      $locationProvider.html5Mode(true);
      $urlRouterProvider.otherwise('/');
      return $stateProvider.state('auth', {
        templateUrl: 'app/pages/auth/index.html',
        controller: 'AuthCtrl',
        abstract: true
      }).state('auth.register', {
        url: '/',
        templateUrl: 'app/pages/auth/register/index.html',
        controller: 'RegisterCtrl',
        unauthenticated: true
      }).state('auth.login', {
        url: '/login',
        templateUrl: 'app/pages/auth/login/index.html',
        controller: 'LoginCtrl',
        unauthenticated: true
      });
    }
  ]);

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXV0aC9yb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzIjpbInBhZ2VzL2F1dGgvcm91dGVzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLE9BQU8sQ0FBQyxNQUFSLENBQWUsUUFBZixDQUF3QixDQUFDLE1BQXpCLENBQWdDO0lBQzlCLGdCQUQ4QixFQUNiLG1CQURhLEVBQ08sb0JBRFAsRUFFOUIsU0FBQyxjQUFELEVBQWdCLGlCQUFoQixFQUFrQyxrQkFBbEM7TUFFRSxpQkFBaUIsQ0FBQyxTQUFsQixDQUE0QixJQUE1QjtNQUNBLGtCQUFrQixDQUFDLFNBQW5CLENBQTZCLEdBQTdCO2FBRUEsY0FDRSxDQUFDLEtBREgsQ0FDUyxNQURULEVBRUk7UUFBQSxXQUFBLEVBQWEsMkJBQWI7UUFDQSxVQUFBLEVBQVksVUFEWjtRQUVBLFFBQUEsRUFBVSxJQUZWO09BRkosQ0FNRSxDQUFDLEtBTkgsQ0FNUyxlQU5ULEVBT0k7UUFBQSxHQUFBLEVBQUssR0FBTDtRQUNBLFdBQUEsRUFBYSxvQ0FEYjtRQUVBLFVBQUEsRUFBWSxjQUZaO1FBR0EsZUFBQSxFQUFpQixJQUhqQjtPQVBKLENBWUUsQ0FBQyxLQVpILENBWVMsWUFaVCxFQWFJO1FBQUEsR0FBQSxFQUFLLFFBQUw7UUFDQSxXQUFBLEVBQWEsaUNBRGI7UUFFQSxVQUFBLEVBQVksV0FGWjtRQUdBLGVBQUEsRUFBaUIsSUFIakI7T0FiSjtJQUxGLENBRjhCO0dBQWhDO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSgnY2xpZW50JykuY29uZmlnIFtcclxuICAnJHN0YXRlUHJvdmlkZXInLCckbG9jYXRpb25Qcm92aWRlcicsJyR1cmxSb3V0ZXJQcm92aWRlcidcclxuICAoJHN0YXRlUHJvdmlkZXIsJGxvY2F0aW9uUHJvdmlkZXIsJHVybFJvdXRlclByb3ZpZGVyKSAtPlxyXG5cclxuICAgICRsb2NhdGlvblByb3ZpZGVyLmh0bWw1TW9kZSh0cnVlKVxyXG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpXHJcblxyXG4gICAgJHN0YXRlUHJvdmlkZXJcclxuICAgICAgLnN0YXRlICdhdXRoJyxcclxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9wYWdlcy9hdXRoL2luZGV4Lmh0bWwnXHJcbiAgICAgICAgY29udHJvbGxlcjogJ0F1dGhDdHJsJ1xyXG4gICAgICAgIGFic3RyYWN0OiB0cnVlXHJcblxyXG4gICAgICAuc3RhdGUgJ2F1dGgucmVnaXN0ZXInLFxyXG4gICAgICAgIHVybDogJy8nLFxyXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL3BhZ2VzL2F1dGgvcmVnaXN0ZXIvaW5kZXguaHRtbCdcclxuICAgICAgICBjb250cm9sbGVyOiAnUmVnaXN0ZXJDdHJsJ1xyXG4gICAgICAgIHVuYXV0aGVudGljYXRlZDogdHJ1ZVxyXG5cclxuICAgICAgLnN0YXRlICdhdXRoLmxvZ2luJyxcclxuICAgICAgICB1cmw6ICcvbG9naW4nLFxyXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL3BhZ2VzL2F1dGgvbG9naW4vaW5kZXguaHRtbCdcclxuICAgICAgICBjb250cm9sbGVyOiAnTG9naW5DdHJsJ1xyXG4gICAgICAgIHVuYXV0aGVudGljYXRlZDogdHJ1ZVxyXG5dXHJcbiJdfQ==
