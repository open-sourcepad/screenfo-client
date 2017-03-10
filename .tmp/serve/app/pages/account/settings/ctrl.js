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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYWNjb3VudC9zZXR0aW5ncy9jdHJsLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlcyI6WyJwYWdlcy9hY2NvdW50L3NldHRpbmdzL2N0cmwuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBQTs7RUFBQSxJQUFBLEdBQU8sU0FBQyxNQUFELEVBQVEsTUFBUixFQUFlLEtBQWYsRUFBcUIsSUFBckIsRUFBMEIsT0FBMUIsRUFBa0MsSUFBbEM7SUFFTCxNQUFNLENBQUMsSUFBUCxHQUFjO0lBQ2QsTUFBTSxDQUFDLFNBQVAsR0FBbUI7SUFDbkIsTUFBTSxDQUFDLE9BQVAsR0FDRTtNQUFBLE9BQUEsRUFBUyxFQUFUOztJQUVGLE1BQU0sQ0FBQyxJQUFQLEdBQWMsSUFBSSxDQUFDLE9BQUwsQ0FBQTtJQUVkLE1BQU0sQ0FBQyxPQUFQLEdBQWlCLFNBQUE7YUFDZixPQUFPLENBQUMsR0FBUixDQUFBLENBQWEsQ0FBQyxRQUNaLENBQUMsSUFESCxDQUNRLFNBQUMsSUFBRDtRQUNKLE1BQU0sQ0FBQyxJQUFQLEdBQWM7ZUFDZCxPQUFPLENBQUMsR0FBUixDQUFZLE1BQU0sQ0FBQyxJQUFuQjtNQUZJLENBRFIsQ0FJRSxFQUFDLEtBQUQsRUFKRixDQUlTLFNBQUMsR0FBRDtlQUNMLEtBQUssQ0FBQyxLQUFOLENBQVksa0JBQVo7TUFESyxDQUpUO0lBRGU7SUFRakIsTUFBTSxDQUFDLFNBQVAsR0FBa0IsU0FBQyxHQUFEO2FBQ2hCLElBQUksQ0FBQyxTQUFMLENBQWU7UUFBQSxXQUFBLEVBQWEsR0FBYjtPQUFmLENBQWdDLENBQUMsUUFDL0IsQ0FBQyxJQURILENBQ1EsU0FBQyxJQUFEO1FBQ0osS0FBSyxDQUFDLE9BQU4sQ0FBYyxrQ0FBZDtRQUNBLE1BQU0sQ0FBQyxTQUFQLEdBQW1CO2VBQ25CLE1BQU0sQ0FBQyxPQUFQLENBQUE7TUFISSxDQURSLENBS0UsRUFBQyxLQUFELEVBTEYsQ0FLUyxTQUFDLEdBQUQ7ZUFDTCxLQUFLLENBQUMsS0FBTixDQUFZLHFCQUFaO01BREssQ0FMVDtJQURnQjtJQVNsQixNQUFNLENBQUMsWUFBUCxHQUFzQixTQUFBO2FBQ3BCLElBQUksQ0FBQyxJQUFMLENBQVU7UUFBQSxPQUFBLEVBQVMsTUFBTSxDQUFDLE9BQWhCO09BQVYsQ0FBa0MsQ0FBQyxRQUNqQyxDQUFDLElBREgsQ0FDUSxTQUFDLElBQUQ7UUFDSixLQUFLLENBQUMsT0FBTixDQUFjLGVBQWQ7ZUFDQSxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQWYsR0FBeUI7TUFGckIsQ0FEUixDQUlFLEVBQUMsS0FBRCxFQUpGLENBSVMsU0FBQyxHQUFEO2VBQ0wsS0FBSyxDQUFDLEtBQU4sQ0FBWSx5QkFBWjtNQURLLENBSlQ7SUFEb0I7SUFRdEIsTUFBTSxDQUFDLE1BQVAsR0FBZSxTQUFDLElBQUQsRUFBTyxJQUFQO01BQ2IsTUFBTSxDQUFDLElBQVAsR0FBYzthQUNkLE1BQU0sQ0FBQyxTQUFQLEdBQW1CO0lBRk47SUFJZixJQUFvQixDQUFDLE1BQU0sQ0FBQyxJQUE1QjthQUFBLE1BQU0sQ0FBQyxPQUFQLENBQUEsRUFBQTs7RUF0Q0s7O0VBNENQLE9BQU8sQ0FBQyxNQUFSLENBQWUsUUFBZixDQUF3QixDQUFDLFVBQXpCLENBQW9DLGNBQXBDLEVBQW9ELElBQXBEO0FBNUNBIiwic291cmNlc0NvbnRlbnQiOlsiQ3RybCA9ICgkc2NvcGUsJHN0YXRlLGdyb3dsLFVzZXIsU2Vzc2lvbixBdXRoKS0+XHJcblxyXG4gICRzY29wZS50eXBlID0gJydcclxuICAkc2NvcGUubW9kYWxTaG93ID0gZmFsc2VcclxuICAkc2NvcGUubWVzc2FnZSA9XHJcbiAgICBjb250ZW50OiAnJ1xyXG5cclxuICAkc2NvcGUudXNlciA9IEF1dGguZ2V0VXNlcigpXHJcblxyXG4gICRzY29wZS5wcm9maWxlID0gLT5cclxuICAgIFNlc3Npb24uZ2V0KCkuJHByb21pc2VcclxuICAgICAgLnRoZW4gKGRhdGEpLT5cclxuICAgICAgICAkc2NvcGUudXNlciA9IGRhdGFcclxuICAgICAgICBjb25zb2xlLmxvZyAkc2NvcGUudXNlclxyXG4gICAgICAuY2F0Y2ggKGVyciktPlxyXG4gICAgICAgIGdyb3dsLmVycm9yKFwiQ2Fubm90IGdldCB1c2VyLlwiKVxyXG5cclxuICAkc2NvcGUuaW50ZWdyYXRlID0ob2JqKS0+XHJcbiAgICBVc2VyLmludGVncmF0ZSh0aGlyZF9wYXJ0eTogb2JqKS4kcHJvbWlzZVxyXG4gICAgICAudGhlbiAoZGF0YSktPlxyXG4gICAgICAgIGdyb3dsLnN1Y2Nlc3MoXCJTdWNjZXNzZnVsbHkgaW50ZWdyYXRlZCBhY2NvdW50LlwiKVxyXG4gICAgICAgICRzY29wZS5tb2RhbFNob3cgPSBmYWxzZVxyXG4gICAgICAgICRzY29wZS5wcm9maWxlKClcclxuICAgICAgLmNhdGNoIChlcnIpLT5cclxuICAgICAgICBncm93bC5lcnJvcihcIkludGVncmF0aW9uIEZhaWxlZC5cIilcclxuXHJcbiAgJHNjb3BlLnNlbmRfbWVzc2FnZSA9IC0+XHJcbiAgICBVc2VyLnNlbmQobWVzc2FnZTogJHNjb3BlLm1lc3NhZ2UpLiRwcm9taXNlXHJcbiAgICAgIC50aGVuIChkYXRhKS0+XHJcbiAgICAgICAgZ3Jvd2wuc3VjY2VzcyhcIk1lc3NhZ2Ugc2VudCFcIilcclxuICAgICAgICAkc2NvcGUubWVzc2FnZS5jb250ZW50ID0gJydcclxuICAgICAgLmNhdGNoIChlcnIpLT5cclxuICAgICAgICBncm93bC5lcnJvcihcIk1lc3NhZ2Ugc2VuZGluZyBmYWlsZWQhXCIpXHJcblxyXG4gICRzY29wZS50b2dnbGUgPSh0eXBlLCBzaG93KS0+XHJcbiAgICAkc2NvcGUudHlwZSA9IHR5cGVcclxuICAgICRzY29wZS5tb2RhbFNob3cgPSBzaG93XHJcblxyXG4gICRzY29wZS5wcm9maWxlKCkgaWYgISRzY29wZS51c2VyXHJcblxyXG5cclxuXHJcbiBcclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdjbGllbnQnKS5jb250cm9sbGVyKCdTZXR0aW5nc0N0cmwnLCBDdHJsKVxyXG4iXX0=
