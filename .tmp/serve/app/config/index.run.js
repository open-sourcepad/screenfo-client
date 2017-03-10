(function() {
  angular.module('client').run([
    '$rootScope', '$location', '$state', '$window', '$http', 'Session', 'Auth', function($rootScope, $location, $state, $window, $http, Session, Auth) {
      return $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        Session.setHeaders();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnL2luZGV4LnJ1bi5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXMiOlsiY29uZmlnL2luZGV4LnJ1bi5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxPQUFPLENBQUMsTUFBUixDQUFlLFFBQWYsQ0FBd0IsQ0FBQyxHQUF6QixDQUE2QjtJQUMzQixZQUQyQixFQUNkLFdBRGMsRUFDRixRQURFLEVBQ08sU0FEUCxFQUNpQixPQURqQixFQUN5QixTQUR6QixFQUNtQyxNQURuQyxFQUMyQyxTQUFDLFVBQUQsRUFBWSxTQUFaLEVBQXNCLE1BQXRCLEVBQTZCLE9BQTdCLEVBQXFDLEtBQXJDLEVBQTJDLE9BQTNDLEVBQW1ELElBQW5EO2FBRXBFLFVBQVUsQ0FBQyxHQUFYLENBQWUsbUJBQWYsRUFBb0MsU0FBQyxLQUFELEVBQVEsT0FBUixFQUFpQixRQUFqQixFQUEyQixTQUEzQixFQUFzQyxVQUF0QztRQUVsQyxPQUFPLENBQUMsVUFBUixDQUFBO1FBQ0EsSUFBRyxPQUFPLENBQUMsZUFBWDtVQUNFLElBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxPQUFiLENBQXFCLGNBQXJCLENBQUw7WUFDRSxLQUFLLENBQUMsY0FBTixDQUFBO21CQUNBLE9BQU8sQ0FBQyxHQUFSLENBQVksV0FBWixFQUF5QixNQUFNLENBQUMsRUFBUCxDQUFVLGtCQUFWLENBQXpCLEVBRkY7V0FBQSxNQUFBO21CQUlFLE9BQU8sQ0FBQyxHQUFSLENBQVksZ0JBQVosRUFKRjtXQURGO1NBQUEsTUFBQTtVQU9FLElBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxPQUFiLENBQXFCLGNBQXJCLENBQUw7bUJBQ0UsT0FBTyxDQUFDLEdBQVIsQ0FBWSxrQkFBWixFQURGO1dBQUEsTUFBQTtZQUdFLEtBQUssQ0FBQyxjQUFOLENBQUE7WUFDQSxPQUFPLENBQUMsR0FBUixDQUFZLHFCQUFaO21CQUNBLE1BQU0sQ0FBQyxFQUFQLENBQVUsWUFBVixFQUxGO1dBUEY7O01BSGtDLENBQXBDO0lBRm9FLENBRDNDO0dBQTdCO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSgnY2xpZW50JykucnVuIFtcbiAgJyRyb290U2NvcGUnLCckbG9jYXRpb24nLCckc3RhdGUnLCckd2luZG93JywnJGh0dHAnLCdTZXNzaW9uJywnQXV0aCcsICgkcm9vdFNjb3BlLCRsb2NhdGlvbiwkc3RhdGUsJHdpbmRvdywkaHR0cCxTZXNzaW9uLEF1dGgpIC0+XG5cbiAgICAkcm9vdFNjb3BlLiRvbiAnJHN0YXRlQ2hhbmdlU3RhcnQnLCAoZXZlbnQsIHRvU3RhdGUsIHRvUGFyYW1zLCBmcm9tU3RhdGUsIGZyb21QYXJhbXMpIC0+XG5cbiAgICAgIFNlc3Npb24uc2V0SGVhZGVycygpXG4gICAgICBpZiB0b1N0YXRlLnVuYXV0aGVudGljYXRlZFxuICAgICAgICBpZiAhIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY2Nlc3NfdG9rZW4nKVxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICBjb25zb2xlLmxvZyAnREFTSEJPQVJEJywgJHN0YXRlLmdvKCdhY2NvdW50LnNldHRpbmdzJylcbiAgICAgICAgZWxzZVxuICAgICAgICAgIGNvbnNvbGUubG9nICdubyBhdXRoIG5lZWRlZCdcbiAgICAgIGVsc2VcbiAgICAgICAgaWYgISFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWNjZXNzX3Rva2VuJylcbiAgICAgICAgICBjb25zb2xlLmxvZyAnbG9hZGVkIEF1dGhUb2tlbidcbiAgICAgICAgZWxzZVxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICBjb25zb2xlLmxvZyAncmVkaXJlY3RlZCB0byBsb2dpbidcbiAgICAgICAgICAkc3RhdGUuZ28oJ2F1dGgubG9naW4nKVxuXG5dXG4iXX0=
