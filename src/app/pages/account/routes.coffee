angular.module('client').config [
  '$stateProvider','$locationProvider','$urlRouterProvider'
  ($stateProvider,$locationProvider,$urlRouterProvider) ->

    $locationProvider.html5Mode(true)

    $stateProvider
      .state 'account',
        url: '/account'
        templateUrl: 'app/pages/account/index.html'
        controller: 'AccountCtrl'
        abstract: true

      .state 'account.settings',
        url: '/settings',
        templateUrl: 'app/pages/account/settings/index.html'
        controller: 'SettingsCtrl'
]
