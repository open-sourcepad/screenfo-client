(function() {
  var module;

  module = function($resource, Session) {
    var user;
    user = null;
    return {
      getUser: function() {
        return user;
      },
      setUser: function(obj) {
        user = obj;
      },
      removeUser: function() {
        user = null;
        localStorage.removeItem("access_token");
        localStorage.removeItem("user_id");
      }
    };
  };

  angular.module('client').factory('Auth', module);

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMvYXV0aC5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXMiOlsic2VydmljZXMvYXV0aC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBOztFQUFBLE1BQUEsR0FBUyxTQUFDLFNBQUQsRUFBVyxPQUFYO0FBQ1AsUUFBQTtJQUFBLElBQUEsR0FBTztXQUNQO01BQ0UsT0FBQSxFQUFTLFNBQUE7QUFDUCxlQUFPO01BREEsQ0FEWDtNQUdFLE9BQUEsRUFBUyxTQUFDLEdBQUQ7UUFDUCxJQUFBLEdBQU87TUFEQSxDQUhYO01BTUUsVUFBQSxFQUFZLFNBQUE7UUFDVixJQUFBLEdBQU87UUFDUCxZQUFZLENBQUMsVUFBYixDQUF3QixjQUF4QjtRQUNBLFlBQVksQ0FBQyxVQUFiLENBQXdCLFNBQXhCO01BSFUsQ0FOZDs7RUFGTzs7RUFpQlQsT0FBTyxDQUFDLE1BQVIsQ0FBZSxRQUFmLENBQXdCLENBQUMsT0FBekIsQ0FBaUMsTUFBakMsRUFBeUMsTUFBekM7QUFqQkEiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUgPSAoJHJlc291cmNlLFNlc3Npb24pLT5cclxuICB1c2VyID0gbnVsbFxyXG4gIHtcclxuICAgIGdldFVzZXI6IC0+XHJcbiAgICAgIHJldHVybiB1c2VyXHJcbiAgICBzZXRVc2VyOiAob2JqKSAtPlxyXG4gICAgICB1c2VyID0gb2JqXHJcbiAgICAgIHJldHVyblxyXG4gICAgcmVtb3ZlVXNlcjogLT5cclxuICAgICAgdXNlciA9IG51bGxcclxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJhY2Nlc3NfdG9rZW5cIilcclxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VyX2lkXCIpXHJcbiAgICAgIHJldHVyblxyXG5cclxuICB9XHJcblxyXG5cclxuYW5ndWxhci5tb2R1bGUoJ2NsaWVudCcpLmZhY3RvcnkoJ0F1dGgnLCBtb2R1bGUpXHJcbiJdfQ==
