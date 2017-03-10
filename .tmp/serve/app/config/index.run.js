(function() {
  angular.module('client').run([
    '$rootScope', '$location', '$state', '$window', '$http', 'Session', 'Auth', function($rootScope, $location, $state, $window, $http, Session, Auth) {
      return $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        if (toState.unauthenticated) {
          if (!!localStorage.getItem('access_token')) {
            event.preventDefault();
            return console.log('DASHBOARD', $state.go('account.settings'));
          } else {
            return console.log('no auth needed');
          }
        } else {
          if (!!localStorage.getItem('access_token')) {
            return console.log('loaded AuthToken');
          } else {
            event.preventDefault();
            console.log('redirected to login');
            return $state.go('auth.login');
          }
        }
      });
    }
  ]);

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnL2luZGV4LnJ1bi5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXMiOlsiY29uZmlnL2luZGV4LnJ1bi5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxPQUFPLENBQUMsTUFBUixDQUFlLFFBQWYsQ0FBd0IsQ0FBQyxHQUF6QixDQUE2QjtJQUMzQixZQUQyQixFQUNkLFdBRGMsRUFDRixRQURFLEVBQ08sU0FEUCxFQUNpQixPQURqQixFQUN5QixTQUR6QixFQUNtQyxNQURuQyxFQUMyQyxTQUFDLFVBQUQsRUFBWSxTQUFaLEVBQXNCLE1BQXRCLEVBQTZCLE9BQTdCLEVBQXFDLEtBQXJDLEVBQTJDLE9BQTNDLEVBQW1ELElBQW5EO2FBRXBFLFVBQVUsQ0FBQyxHQUFYLENBQWUsbUJBQWYsRUFBb0MsU0FBQyxLQUFELEVBQVEsT0FBUixFQUFpQixRQUFqQixFQUEyQixTQUEzQixFQUFzQyxVQUF0QztRQUVsQyxJQUFHLE9BQU8sQ0FBQyxlQUFYO1VBQ0UsSUFBRyxDQUFDLENBQUMsWUFBWSxDQUFDLE9BQWIsQ0FBcUIsY0FBckIsQ0FBTDtZQUNFLEtBQUssQ0FBQyxjQUFOLENBQUE7bUJBQ0EsT0FBTyxDQUFDLEdBQVIsQ0FBWSxXQUFaLEVBQXlCLE1BQU0sQ0FBQyxFQUFQLENBQVUsa0JBQVYsQ0FBekIsRUFGRjtXQUFBLE1BQUE7bUJBSUUsT0FBTyxDQUFDLEdBQVIsQ0FBWSxnQkFBWixFQUpGO1dBREY7U0FBQSxNQUFBO1VBT0UsSUFBRyxDQUFDLENBQUMsWUFBWSxDQUFDLE9BQWIsQ0FBcUIsY0FBckIsQ0FBTDttQkFDRSxPQUFPLENBQUMsR0FBUixDQUFZLGtCQUFaLEVBREY7V0FBQSxNQUFBO1lBR0UsS0FBSyxDQUFDLGNBQU4sQ0FBQTtZQUNBLE9BQU8sQ0FBQyxHQUFSLENBQVkscUJBQVo7bUJBQ0EsTUFBTSxDQUFDLEVBQVAsQ0FBVSxZQUFWLEVBTEY7V0FQRjs7TUFGa0MsQ0FBcEM7SUFGb0UsQ0FEM0M7R0FBN0I7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCdjbGllbnQnKS5ydW4gW1xyXG4gICckcm9vdFNjb3BlJywnJGxvY2F0aW9uJywnJHN0YXRlJywnJHdpbmRvdycsJyRodHRwJywnU2Vzc2lvbicsJ0F1dGgnLCAoJHJvb3RTY29wZSwkbG9jYXRpb24sJHN0YXRlLCR3aW5kb3csJGh0dHAsU2Vzc2lvbixBdXRoKSAtPlxyXG5cclxuICAgICRyb290U2NvcGUuJG9uICckc3RhdGVDaGFuZ2VTdGFydCcsIChldmVudCwgdG9TdGF0ZSwgdG9QYXJhbXMsIGZyb21TdGF0ZSwgZnJvbVBhcmFtcykgLT5cclxuXHJcbiAgICAgIGlmIHRvU3RhdGUudW5hdXRoZW50aWNhdGVkXHJcbiAgICAgICAgaWYgISFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWNjZXNzX3Rva2VuJylcclxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgIGNvbnNvbGUubG9nICdEQVNIQk9BUkQnLCAkc3RhdGUuZ28oJ2FjY291bnQuc2V0dGluZ3MnKVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgIGNvbnNvbGUubG9nICdubyBhdXRoIG5lZWRlZCdcclxuICAgICAgZWxzZVxyXG4gICAgICAgIGlmICEhbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc190b2tlbicpXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyAnbG9hZGVkIEF1dGhUb2tlbidcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyAncmVkaXJlY3RlZCB0byBsb2dpbidcclxuICAgICAgICAgICRzdGF0ZS5nbygnYXV0aC5sb2dpbicpXHJcblxyXG5dXHJcbiJdfQ==
