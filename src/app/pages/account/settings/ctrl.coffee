Ctrl = ($scope,$state,growl,User,Session,Auth)->

  $scope.type = ''
  $scope.modalShow = false
  $scope.message =
    content: ''

  $scope.user = Auth.getUser()

  $scope.profile = ->
    Session.get().$promise
      .then (data)->
        $scope.user = data
        console.log $scope.user
      .catch (err)->
        growl.error("Cannot get user.")

  $scope.integrate =(obj)->
    User.integrate(third_party: obj).$promise
      .then (data)->
        growl.success("Successfully integrated account.")
        $scope.modalShow = false
        $scope.profile()
      .catch (err)->
        growl.error("Integration Failed.")

  $scope.send_message = ->
    User.send(message: $scope.message).$promise
      .then (data)->
        growl.success("Message sent!")
        $scope.message.content = ''
      .catch (err)->
        growl.error("Message sending failed!")

  $scope.toggle =(type, show)->
    $scope.type = type
    $scope.modalShow = show

  $scope.profile() if !$scope.user



 

angular.module('client').controller('SettingsCtrl', Ctrl)
