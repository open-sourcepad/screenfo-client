Ctrl =($scope,Auth,$rootScope)->



angular.module('client').directive 'header',->
  restrict: "E"
  replace: true
  templateUrl: 'app/components/header/index.html'
  controller: Ctrl
