(function() {
  var module;

  module = function($resource, BASE_ENDPOINT, $http) {
    var User;
    User = $resource(BASE_ENDPOINT + "/third_party_integration", null, {
      integrate: {
        method: 'POST'
      }
    });
    return User;
  };

  angular.module('client').factory('User', module);

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMvdXNlci5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXMiOlsic2VydmljZXMvdXNlci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBOztFQUFBLE1BQUEsR0FBUyxTQUFDLFNBQUQsRUFBVyxhQUFYLEVBQXlCLEtBQXpCO0FBRVAsUUFBQTtJQUFBLElBQUEsR0FBTyxTQUFBLENBQWEsYUFBRCxHQUFlLDBCQUEzQixFQUFzRCxJQUF0RCxFQUNMO01BQ0UsU0FBQSxFQUNFO1FBQUEsTUFBQSxFQUFRLE1BQVI7T0FGSjtLQURLO1dBTVA7RUFSTzs7RUFVVCxPQUFPLENBQUMsTUFBUixDQUFlLFFBQWYsQ0FBd0IsQ0FBQyxPQUF6QixDQUFpQyxNQUFqQyxFQUF5QyxNQUF6QztBQVZBIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlID0gKCRyZXNvdXJjZSxCQVNFX0VORFBPSU5ULCRodHRwKS0+XHJcblxyXG4gIFVzZXIgPSAkcmVzb3VyY2UgXCIje0JBU0VfRU5EUE9JTlR9L3RoaXJkX3BhcnR5X2ludGVncmF0aW9uXCIsIG51bGwsXHJcbiAgICB7XHJcbiAgICAgIGludGVncmF0ZTpcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJ1xyXG4gICAgfVxyXG5cclxuICBVc2VyXHJcblxyXG5hbmd1bGFyLm1vZHVsZSgnY2xpZW50JykuZmFjdG9yeSgnVXNlcicsIG1vZHVsZSlcclxuIl19
