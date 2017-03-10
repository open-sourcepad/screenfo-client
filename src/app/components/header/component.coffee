Ctrl =($scope,$state,Session,growl,Auth)->

  $scope.isLoggedIn = ->
    return !!localStorage.getItem('access_token')

  $scope.logout = ->
    Session.logout().$promise
      .then (data)->
        Auth.removeUser()
        growl.success(MESSAGES.LOGOUT_SUCCESS)
        $state.go("auth.register")
      .catch (err)->
        growl.error("Failed to logout.")


angular.module('client').directive 'header',->
  restrict: "E"
  replace: true
  templateUrl: 'app/components/header/index.html'
  controller: Ctrl
