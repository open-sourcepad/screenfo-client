(function() {
  angular.module('client').factory('httpInterceptor', [
    '$q', '$rootScope', '$injector', 'growl', function($q, $rootScope, $injector, growl) {
      return {
        responseError: function(response) {
          var message, ref, ref1, title;
          if ((ref = response.status) !== 401 && ref !== 403 && ref !== 422 && ref !== 500) {
            return;
          }
          title = response.data.message || 'Oops!';
          message = response.data.error || ((ref1 = response.data.errors) != null ? ref1.join("<br><br>") : void 0) || 'Something went wrong';
          switch (response.status) {
            case 401:
            case 403:
              growl.error(MESSAGES.ACCESS_DENIED);
              $injector.get('Auth').removeUser();
              break;
            case 422:
              growl.error(message);
              break;
            case 500:
              growl.error(MESSAGES.INTERNAL_SERVER_ERROR);
          }
          return $q.reject(response);
        }
      };
    }
  ]).config([
    '$httpProvider', function($httpProvider) {
      return $httpProvider.interceptors.push('httpInterceptor');
    }
  ]);

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnL2luZGV4LmludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlcyI6WyJjb25maWcvaW5kZXguaW50ZXJjZXB0b3IuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxRQUFmLENBQXdCLENBQUMsT0FBekIsQ0FBaUMsaUJBQWpDLEVBQW9EO0lBQ2xELElBRGtELEVBQzdDLFlBRDZDLEVBQ2hDLFdBRGdDLEVBQ3BCLE9BRG9CLEVBRWxELFNBQUMsRUFBRCxFQUFLLFVBQUwsRUFBZ0IsU0FBaEIsRUFBMEIsS0FBMUI7YUFDRTtRQUNFLGFBQUEsRUFBZSxTQUFDLFFBQUQ7QUFDYixjQUFBO1VBQUEsV0FBVSxRQUFRLENBQUMsT0FBVCxLQUF3QixHQUF4QixJQUFBLEdBQUEsS0FBNEIsR0FBNUIsSUFBQSxHQUFBLEtBQWdDLEdBQWhDLElBQUEsR0FBQSxLQUFvQyxHQUE5QztBQUFBLG1CQUFBOztVQUNBLEtBQUEsR0FBUSxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQWQsSUFBeUI7VUFDakMsT0FBQSxHQUFVLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBZCxpREFBMkMsQ0FBRSxJQUF0QixDQUEyQixVQUEzQixXQUF2QixJQUFpRTtBQUMzRSxrQkFBTyxRQUFRLENBQUMsTUFBaEI7QUFBQSxpQkFDTyxHQURQO0FBQUEsaUJBQ1csR0FEWDtjQUVJLEtBQUssQ0FBQyxLQUFOLENBQVksUUFBUSxDQUFDLGFBQXJCO2NBQ0EsU0FBUyxDQUFDLEdBQVYsQ0FBYyxNQUFkLENBQXFCLENBQUMsVUFBdEIsQ0FBQTtBQUZPO0FBRFgsaUJBS08sR0FMUDtjQU1JLEtBQUssQ0FBQyxLQUFOLENBQVksT0FBWjtBQURHO0FBTFAsaUJBT08sR0FQUDtjQVFJLEtBQUssQ0FBQyxLQUFOLENBQVksUUFBUSxDQUFDLHFCQUFyQjtBQVJKO2lCQVNBLEVBQUUsQ0FBQyxNQUFILENBQVUsUUFBVjtRQWJhLENBRGpCOztJQURGLENBRmtEO0dBQXBELENBb0JFLENBQUMsTUFwQkgsQ0FvQlU7SUFDUixlQURRLEVBRVIsU0FBQyxhQUFEO2FBQ0UsYUFBYSxDQUFDLFlBQVksQ0FBQyxJQUEzQixDQUFnQyxpQkFBaEM7SUFERixDQUZRO0dBcEJWO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSgnY2xpZW50JykuZmFjdG9yeSgnaHR0cEludGVyY2VwdG9yJywgW1xyXG4gICckcScsJyRyb290U2NvcGUnLCckaW5qZWN0b3InLCdncm93bCdcclxuICAoJHEsICRyb290U2NvcGUsJGluamVjdG9yLGdyb3dsKSAtPlxyXG4gICAge1xyXG4gICAgICByZXNwb25zZUVycm9yOiAocmVzcG9uc2UpIC0+XHJcbiAgICAgICAgcmV0dXJuIGlmIHJlc3BvbnNlLnN0YXR1cyBub3QgaW4gWzQwMSw0MDMsNDIyLDUwMF1cclxuICAgICAgICB0aXRsZSA9IHJlc3BvbnNlLmRhdGEubWVzc2FnZSBvciAnT29wcyEnXHJcbiAgICAgICAgbWVzc2FnZSA9IHJlc3BvbnNlLmRhdGEuZXJyb3Igb3IgcmVzcG9uc2UuZGF0YS5lcnJvcnM/LmpvaW4oXCI8YnI+PGJyPlwiKSBvciAnU29tZXRoaW5nIHdlbnQgd3JvbmcnXHJcbiAgICAgICAgc3dpdGNoIHJlc3BvbnNlLnN0YXR1c1xyXG4gICAgICAgICAgd2hlbiA0MDEsNDAzXHJcbiAgICAgICAgICAgIGdyb3dsLmVycm9yKE1FU1NBR0VTLkFDQ0VTU19ERU5JRUQpXHJcbiAgICAgICAgICAgICRpbmplY3Rvci5nZXQoJ0F1dGgnKS5yZW1vdmVVc2VyKClcclxuICAgICAgICAgICAgIyAkaW5qZWN0b3IuZ2V0KCckc3RhdGUnKS5nbyhcImxvZ2luXCIpXHJcbiAgICAgICAgICB3aGVuIDQyMlxyXG4gICAgICAgICAgICBncm93bC5lcnJvcihtZXNzYWdlKVxyXG4gICAgICAgICAgd2hlbiA1MDBcclxuICAgICAgICAgICAgZ3Jvd2wuZXJyb3IoTUVTU0FHRVMuSU5URVJOQUxfU0VSVkVSX0VSUk9SKVxyXG4gICAgICAgICRxLnJlamVjdChyZXNwb25zZSlcclxuICAgIH1cclxuXHJcbl0pLmNvbmZpZyBbXHJcbiAgJyRodHRwUHJvdmlkZXInXHJcbiAgKCRodHRwUHJvdmlkZXIpIC0+XHJcbiAgICAkaHR0cFByb3ZpZGVyLmludGVyY2VwdG9ycy5wdXNoKCdodHRwSW50ZXJjZXB0b3InKVxyXG5dXHJcbiJdfQ==
