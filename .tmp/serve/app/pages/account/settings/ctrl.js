(function() {
  var Ctrl;

  Ctrl = function($scope, $state, growl, User, Session, Auth) {
    $scope.type = '';
    $scope.modalShow = false;
    $scope.message = {
      content: ''
    };
    $scope.user = Auth.getUser();
    $scope.profile = function() {
      return Session.get().$promise.then(function(data) {
        $scope.user = data;
        return console.log($scope.user);
      })["catch"](function(err) {
        return growl.error("Cannot get user.");
      });
    };
    $scope.integrate = function(obj) {
      return User.integrate({
        third_party: obj
      }).$promise.then(function(data) {
        growl.success("Successfully integrated account.");
        $scope.modalShow = false;
        return $scope.profile();
      })["catch"](function(err) {
        return growl.error("Integration Failed.");
      });
    };
    $scope.send_message = function() {
      return User.send({
        message: $scope.message
      }).$promise.then(function(data) {
        growl.success("Message sent!");
        return $scope.message.content = '';
      })["catch"](function(err) {
        return growl.error("Message sending failed!");
      });
    };
    $scope.toggle = function(type, show) {
      $scope.type = type;
      return $scope.modalShow = show;
    };
    if (!$scope.user) {
      return $scope.profile();
    }
  };

  angular.module('client').controller('SettingsCtrl', Ctrl);

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYWNjb3VudC9zZXR0aW5ncy9jdHJsLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlcyI6WyJwYWdlcy9hY2NvdW50L3NldHRpbmdzL2N0cmwuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBQTs7RUFBQSxJQUFBLEdBQU8sU0FBQyxNQUFELEVBQVEsTUFBUixFQUFlLEtBQWYsRUFBcUIsSUFBckIsRUFBMEIsT0FBMUIsRUFBa0MsSUFBbEM7SUFFTCxNQUFNLENBQUMsSUFBUCxHQUFjO0lBQ2QsTUFBTSxDQUFDLFNBQVAsR0FBbUI7SUFDbkIsTUFBTSxDQUFDLE9BQVAsR0FDRTtNQUFBLE9BQUEsRUFBUyxFQUFUOztJQUVGLE1BQU0sQ0FBQyxJQUFQLEdBQWMsSUFBSSxDQUFDLE9BQUwsQ0FBQTtJQUVkLE1BQU0sQ0FBQyxPQUFQLEdBQWlCLFNBQUE7YUFDZixPQUFPLENBQUMsR0FBUixDQUFBLENBQWEsQ0FBQyxRQUNaLENBQUMsSUFESCxDQUNRLFNBQUMsSUFBRDtRQUNKLE1BQU0sQ0FBQyxJQUFQLEdBQWM7ZUFDZCxPQUFPLENBQUMsR0FBUixDQUFZLE1BQU0sQ0FBQyxJQUFuQjtNQUZJLENBRFIsQ0FJRSxFQUFDLEtBQUQsRUFKRixDQUlTLFNBQUMsR0FBRDtlQUNMLEtBQUssQ0FBQyxLQUFOLENBQVksa0JBQVo7TUFESyxDQUpUO0lBRGU7SUFRakIsTUFBTSxDQUFDLFNBQVAsR0FBa0IsU0FBQyxHQUFEO2FBQ2hCLElBQUksQ0FBQyxTQUFMLENBQWU7UUFBQSxXQUFBLEVBQWEsR0FBYjtPQUFmLENBQWdDLENBQUMsUUFDL0IsQ0FBQyxJQURILENBQ1EsU0FBQyxJQUFEO1FBQ0osS0FBSyxDQUFDLE9BQU4sQ0FBYyxrQ0FBZDtRQUNBLE1BQU0sQ0FBQyxTQUFQLEdBQW1CO2VBQ25CLE1BQU0sQ0FBQyxPQUFQLENBQUE7TUFISSxDQURSLENBS0UsRUFBQyxLQUFELEVBTEYsQ0FLUyxTQUFDLEdBQUQ7ZUFDTCxLQUFLLENBQUMsS0FBTixDQUFZLHFCQUFaO01BREssQ0FMVDtJQURnQjtJQVNsQixNQUFNLENBQUMsWUFBUCxHQUFzQixTQUFBO2FBQ3BCLElBQUksQ0FBQyxJQUFMLENBQVU7UUFBQSxPQUFBLEVBQVMsTUFBTSxDQUFDLE9BQWhCO09BQVYsQ0FBa0MsQ0FBQyxRQUNqQyxDQUFDLElBREgsQ0FDUSxTQUFDLElBQUQ7UUFDSixLQUFLLENBQUMsT0FBTixDQUFjLGVBQWQ7ZUFDQSxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQWYsR0FBeUI7TUFGckIsQ0FEUixDQUlFLEVBQUMsS0FBRCxFQUpGLENBSVMsU0FBQyxHQUFEO2VBQ0wsS0FBSyxDQUFDLEtBQU4sQ0FBWSx5QkFBWjtNQURLLENBSlQ7SUFEb0I7SUFRdEIsTUFBTSxDQUFDLE1BQVAsR0FBZSxTQUFDLElBQUQsRUFBTyxJQUFQO01BQ2IsTUFBTSxDQUFDLElBQVAsR0FBYzthQUNkLE1BQU0sQ0FBQyxTQUFQLEdBQW1CO0lBRk47SUFJZixJQUFvQixDQUFDLE1BQU0sQ0FBQyxJQUE1QjthQUFBLE1BQU0sQ0FBQyxPQUFQLENBQUEsRUFBQTs7RUF0Q0s7O0VBNENQLE9BQU8sQ0FBQyxNQUFSLENBQWUsUUFBZixDQUF3QixDQUFDLFVBQXpCLENBQW9DLGNBQXBDLEVBQW9ELElBQXBEO0FBNUNBIiwic291cmNlc0NvbnRlbnQiOlsiQ3RybCA9ICgkc2NvcGUsJHN0YXRlLGdyb3dsLFVzZXIsU2Vzc2lvbixBdXRoKS0+XG5cbiAgJHNjb3BlLnR5cGUgPSAnJ1xuICAkc2NvcGUubW9kYWxTaG93ID0gZmFsc2VcbiAgJHNjb3BlLm1lc3NhZ2UgPVxuICAgIGNvbnRlbnQ6ICcnXG5cbiAgJHNjb3BlLnVzZXIgPSBBdXRoLmdldFVzZXIoKVxuXG4gICRzY29wZS5wcm9maWxlID0gLT5cbiAgICBTZXNzaW9uLmdldCgpLiRwcm9taXNlXG4gICAgICAudGhlbiAoZGF0YSktPlxuICAgICAgICAkc2NvcGUudXNlciA9IGRhdGFcbiAgICAgICAgY29uc29sZS5sb2cgJHNjb3BlLnVzZXJcbiAgICAgIC5jYXRjaCAoZXJyKS0+XG4gICAgICAgIGdyb3dsLmVycm9yKFwiQ2Fubm90IGdldCB1c2VyLlwiKVxuXG4gICRzY29wZS5pbnRlZ3JhdGUgPShvYmopLT5cbiAgICBVc2VyLmludGVncmF0ZSh0aGlyZF9wYXJ0eTogb2JqKS4kcHJvbWlzZVxuICAgICAgLnRoZW4gKGRhdGEpLT5cbiAgICAgICAgZ3Jvd2wuc3VjY2VzcyhcIlN1Y2Nlc3NmdWxseSBpbnRlZ3JhdGVkIGFjY291bnQuXCIpXG4gICAgICAgICRzY29wZS5tb2RhbFNob3cgPSBmYWxzZVxuICAgICAgICAkc2NvcGUucHJvZmlsZSgpXG4gICAgICAuY2F0Y2ggKGVyciktPlxuICAgICAgICBncm93bC5lcnJvcihcIkludGVncmF0aW9uIEZhaWxlZC5cIilcblxuICAkc2NvcGUuc2VuZF9tZXNzYWdlID0gLT5cbiAgICBVc2VyLnNlbmQobWVzc2FnZTogJHNjb3BlLm1lc3NhZ2UpLiRwcm9taXNlXG4gICAgICAudGhlbiAoZGF0YSktPlxuICAgICAgICBncm93bC5zdWNjZXNzKFwiTWVzc2FnZSBzZW50IVwiKVxuICAgICAgICAkc2NvcGUubWVzc2FnZS5jb250ZW50ID0gJydcbiAgICAgIC5jYXRjaCAoZXJyKS0+XG4gICAgICAgIGdyb3dsLmVycm9yKFwiTWVzc2FnZSBzZW5kaW5nIGZhaWxlZCFcIilcblxuICAkc2NvcGUudG9nZ2xlID0odHlwZSwgc2hvdyktPlxuICAgICRzY29wZS50eXBlID0gdHlwZVxuICAgICRzY29wZS5tb2RhbFNob3cgPSBzaG93XG5cbiAgJHNjb3BlLnByb2ZpbGUoKSBpZiAhJHNjb3BlLnVzZXJcblxuXG5cbiBcblxuYW5ndWxhci5tb2R1bGUoJ2NsaWVudCcpLmNvbnRyb2xsZXIoJ1NldHRpbmdzQ3RybCcsIEN0cmwpXG4iXX0=
