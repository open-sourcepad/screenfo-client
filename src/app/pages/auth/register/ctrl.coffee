Ctrl = ($scope,$state,growl,Session)->

  $scope.user =
    email: ""
    password: ""

  $scope.uiState =
    loading: false

  $scope.register=(form)->
    form.$submitted = true
    if form.$valid
      Session.register({user: $scope.user}).$promise
        .then (data)->
          growl.success(MESSAGES.REGISTER_SUCCESS)
          $state.go("auth.login")
        .catch (err)->
          growl.success(MESSAGES.REGISTER_FAILED)


angular.module('client').controller('RegisterCtrl', Ctrl)
