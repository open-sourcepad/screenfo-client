Ctrl = ($scope,$state,growl,User,Session,Auth)->

  $scope.type = ''
  $scope.modalShow = false

  $scope.user = Auth.getUser()

  $scope.profile = ->
    Session.get().$promise
      .then (data)->
        $scope.user = data
      .catch (err)->
        growl.error("Cannot get user.")

  $scope.integrate =(obj)->
    User.integrate(third_party: obj).$promise
      .then (data)->
        growl.success("Successfully integrated account.")
      .catch (err)->
        growl.error("Integration Failed.")

  $scope.toggle =(type, show)->
    $scope.type = type
    $scope.modalShow = show

  $scope.profile() if !$scope.user



 

angular.module('client').controller('SettingsCtrl', Ctrl)
