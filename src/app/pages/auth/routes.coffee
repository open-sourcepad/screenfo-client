angular.module('client').config [
  '$stateProvider','$locationProvider','$urlRouterProvider'
  ($stateProvider,$locationProvider,$urlRouterProvider) ->

    $locationProvider.html5Mode(true)
    $urlRouterProvider.otherwise('/')

    $stateProvider
      .state 'auth',
        templateUrl: 'app/pages/auth/index.html'
        controller: 'AuthCtrl'
        abstract: true

      .state 'auth.register',
        url: '/',
        templateUrl: 'app/pages/auth/register/index.html'
        controller: 'RegisterCtrl'
        unauthenticated: true

      .state 'auth.login',
        url: '/login',
        templateUrl: 'app/pages/auth/login/index.html'
        controller: 'LoginCtrl'
        unauthenticated: true
]
