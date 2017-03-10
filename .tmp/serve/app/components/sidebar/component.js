(function() {
  var Ctrl;

  Ctrl = function($scope, Auth, $rootScope, $state) {
    $scope.user = Auth.getUser();
    $scope.uiState = {
      showDropdown: false
    };
    $scope.openDropdown = function() {
      return $scope.uiState.showDropdown = !$scope.uiState.showDropdown;
    };
    return $scope.logout = function() {
      localStorage.clear();
      return $state.go("login", {
        reload: true
      });
    };
  };

  angular.module('client').directive('sidebar', function() {
    return {
      restrict: "E",
      replace: true,
      templateUrl: 'app/components/sidebar/index.html',
      controller: Ctrl
    };
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy9zaWRlYmFyL2NvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9zaWRlYmFyL2NvbXBvbmVudC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBOztFQUFBLElBQUEsR0FBTSxTQUFDLE1BQUQsRUFBUSxJQUFSLEVBQWEsVUFBYixFQUF3QixNQUF4QjtJQUVKLE1BQU0sQ0FBQyxJQUFQLEdBQWMsSUFBSSxDQUFDLE9BQUwsQ0FBQTtJQUNkLE1BQU0sQ0FBQyxPQUFQLEdBQ0U7TUFBQSxZQUFBLEVBQWMsS0FBZDs7SUFFRixNQUFNLENBQUMsWUFBUCxHQUFzQixTQUFBO2FBQ3BCLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBZixHQUE4QixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFEMUI7V0FHdEIsTUFBTSxDQUFDLE1BQVAsR0FBZ0IsU0FBQTtNQUNkLFlBQVksQ0FBQyxLQUFiLENBQUE7YUFDQSxNQUFNLENBQUMsRUFBUCxDQUFVLE9BQVYsRUFBa0I7UUFBQyxNQUFBLEVBQVEsSUFBVDtPQUFsQjtJQUZjO0VBVFo7O0VBYU4sT0FBTyxDQUFDLE1BQVIsQ0FBZSxRQUFmLENBQXdCLENBQUMsU0FBekIsQ0FBbUMsU0FBbkMsRUFBNkMsU0FBQTtXQUMzQztNQUFBLFFBQUEsRUFBVSxHQUFWO01BQ0EsT0FBQSxFQUFTLElBRFQ7TUFFQSxXQUFBLEVBQWEsbUNBRmI7TUFHQSxVQUFBLEVBQVksSUFIWjs7RUFEMkMsQ0FBN0M7QUFiQSIsInNvdXJjZXNDb250ZW50IjpbIkN0cmwgPSgkc2NvcGUsQXV0aCwkcm9vdFNjb3BlLCRzdGF0ZSktPlxyXG5cclxuICAkc2NvcGUudXNlciA9IEF1dGguZ2V0VXNlcigpXHJcbiAgJHNjb3BlLnVpU3RhdGUgPVxyXG4gICAgc2hvd0Ryb3Bkb3duOiBmYWxzZVxyXG5cclxuICAkc2NvcGUub3BlbkRyb3Bkb3duID0gLT5cclxuICAgICRzY29wZS51aVN0YXRlLnNob3dEcm9wZG93biA9ICEkc2NvcGUudWlTdGF0ZS5zaG93RHJvcGRvd25cclxuXHJcbiAgJHNjb3BlLmxvZ291dCA9IC0+XHJcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKVxyXG4gICAgJHN0YXRlLmdvKFwibG9naW5cIix7cmVsb2FkOiB0cnVlfSlcclxuXHJcbmFuZ3VsYXIubW9kdWxlKCdjbGllbnQnKS5kaXJlY3RpdmUgJ3NpZGViYXInLC0+XHJcbiAgcmVzdHJpY3Q6IFwiRVwiXHJcbiAgcmVwbGFjZTogdHJ1ZVxyXG4gIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvc2lkZWJhci9pbmRleC5odG1sJ1xyXG4gIGNvbnRyb2xsZXI6IEN0cmxcclxuIl19
