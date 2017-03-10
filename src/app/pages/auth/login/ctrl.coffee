Ctrl = ($scope,$state,growl,Session,Auth)->

  $scope.creds =
    email: ""
    password: ""

  $scope.uiState =
    loading: false

  $scope.login =(form)->
    $scope.uiState.loading = true
    form.$submitted = true
    if form.$valid
      Session.login(user: $scope.creds).$promise
        .then (data) ->
          Auth.setUser(data)
          Session.setSession(data)
          growl.success(MESSAGES.LOGIN_SUCCESS)
          $state.go("account.settings")
        .finally ->
          $scope.uiState.loading = false


angular.module('client').controller('LoginCtrl', Ctrl)
