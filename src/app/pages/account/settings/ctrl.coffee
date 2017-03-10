Ctrl = ($scope,$state,growl,User)->

  $scope.form =
    email: ''
    password: ''
    third_party: 'n24'

  $scope.integrate = ->
    User.integrate(third_party: $scope.form).$promise
      .then (data)->
        debugger
      .catch (err)->
        debugger


 

angular.module('client').controller('SettingsCtrl', Ctrl)
