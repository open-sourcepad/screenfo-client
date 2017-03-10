(function() {
  var Ctrl;

  Ctrl = function($scope, $state, growl, User) {
    $scope.form = {
      email: '',
      password: '',
      third_party: 'n24'
    };
    return $scope.integrate = function() {
      return User.integrate({
        third_party: $scope.form
      }).$promise.then(function(data) {
        debugger;
      })["catch"](function(err) {
        debugger;
      });
    };
  };

  angular.module('client').controller('SettingsCtrl', Ctrl);

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYWNjb3VudC9zZXR0aW5ncy9jdHJsLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlcyI6WyJwYWdlcy9hY2NvdW50L3NldHRpbmdzL2N0cmwuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBQTs7RUFBQSxJQUFBLEdBQU8sU0FBQyxNQUFELEVBQVEsTUFBUixFQUFlLEtBQWYsRUFBcUIsSUFBckI7SUFFTCxNQUFNLENBQUMsSUFBUCxHQUNFO01BQUEsS0FBQSxFQUFPLEVBQVA7TUFDQSxRQUFBLEVBQVUsRUFEVjtNQUVBLFdBQUEsRUFBYSxLQUZiOztXQUlGLE1BQU0sQ0FBQyxTQUFQLEdBQW1CLFNBQUE7YUFDakIsSUFBSSxDQUFDLFNBQUwsQ0FBZTtRQUFBLFdBQUEsRUFBYSxNQUFNLENBQUMsSUFBcEI7T0FBZixDQUF3QyxDQUFDLFFBQ3ZDLENBQUMsSUFESCxDQUNRLFNBQUMsSUFBRDtBQUNKO01BREksQ0FEUixDQUdFLEVBQUMsS0FBRCxFQUhGLENBR1MsU0FBQyxHQUFEO0FBQ0w7TUFESyxDQUhUO0lBRGlCO0VBUGQ7O0VBaUJQLE9BQU8sQ0FBQyxNQUFSLENBQWUsUUFBZixDQUF3QixDQUFDLFVBQXpCLENBQW9DLGNBQXBDLEVBQW9ELElBQXBEO0FBakJBIiwic291cmNlc0NvbnRlbnQiOlsiQ3RybCA9ICgkc2NvcGUsJHN0YXRlLGdyb3dsLFVzZXIpLT5cclxuXHJcbiAgJHNjb3BlLmZvcm0gPVxyXG4gICAgZW1haWw6ICcnXHJcbiAgICBwYXNzd29yZDogJydcclxuICAgIHRoaXJkX3BhcnR5OiAnbjI0J1xyXG5cclxuICAkc2NvcGUuaW50ZWdyYXRlID0gLT5cclxuICAgIFVzZXIuaW50ZWdyYXRlKHRoaXJkX3BhcnR5OiAkc2NvcGUuZm9ybSkuJHByb21pc2VcclxuICAgICAgLnRoZW4gKGRhdGEpLT5cclxuICAgICAgICBkZWJ1Z2dlclxyXG4gICAgICAuY2F0Y2ggKGVyciktPlxyXG4gICAgICAgIGRlYnVnZ2VyXHJcblxyXG5cclxuIFxyXG5cclxuYW5ndWxhci5tb2R1bGUoJ2NsaWVudCcpLmNvbnRyb2xsZXIoJ1NldHRpbmdzQ3RybCcsIEN0cmwpXHJcbiJdfQ==
