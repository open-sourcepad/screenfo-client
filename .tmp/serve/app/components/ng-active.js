(function() {
  var module;

  module = angular.module("NgActive", []);

  module.directive('ngActive', [
    '$location', function($location) {
      return {
        restrict: 'A',
        link: function($scope, $element, $attrs) {
          $scope.location = $location;
          return $scope.$watch('location.$$url', function(currentUrl) {
            if ($element.attr("href") === $location.$$path.split("/").splice(0, 3).join("/")) {
              return $element.addClass('active');
            } else {
              return $element.removeClass('active');
            }
          });
        }
      };
    }
  ]);

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy9uZy1hY3RpdmUuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbmctYWN0aXZlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQUE7O0VBQUEsTUFBQSxHQUFTLE9BQU8sQ0FBQyxNQUFSLENBQWUsVUFBZixFQUEyQixFQUEzQjs7RUFHVCxNQUFNLENBQUMsU0FBUCxDQUFpQixVQUFqQixFQUE2QjtJQUMzQixXQUQyQixFQUUzQixTQUFDLFNBQUQ7YUFDRTtRQUFBLFFBQUEsRUFBVSxHQUFWO1FBQ0EsSUFBQSxFQUFNLFNBQUMsTUFBRCxFQUFTLFFBQVQsRUFBbUIsTUFBbkI7VUFDSixNQUFNLENBQUMsUUFBUCxHQUFrQjtpQkFDbEIsTUFBTSxDQUFDLE1BQVAsQ0FBYyxnQkFBZCxFQUFnQyxTQUFDLFVBQUQ7WUFDOUIsSUFBRyxRQUFRLENBQUMsSUFBVCxDQUFjLE1BQWQsQ0FBQSxLQUF5QixTQUFTLENBQUMsTUFBTSxDQUFDLEtBQWpCLENBQXVCLEdBQXZCLENBQTJCLENBQUMsTUFBNUIsQ0FBbUMsQ0FBbkMsRUFBcUMsQ0FBckMsQ0FBdUMsQ0FBQyxJQUF4QyxDQUE2QyxHQUE3QyxDQUE1QjtxQkFDRSxRQUFRLENBQUMsUUFBVCxDQUFrQixRQUFsQixFQURGO2FBQUEsTUFBQTtxQkFHRSxRQUFRLENBQUMsV0FBVCxDQUFxQixRQUFyQixFQUhGOztVQUQ4QixDQUFoQztRQUZJLENBRE47O0lBREYsQ0FGMkI7R0FBN0I7QUFIQSIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKFwiTmdBY3RpdmVcIiwgW10pXHJcblxyXG5cclxubW9kdWxlLmRpcmVjdGl2ZSAnbmdBY3RpdmUnLCBbXHJcbiAgJyRsb2NhdGlvbidcclxuICAoJGxvY2F0aW9uKSAtPlxyXG4gICAgcmVzdHJpY3Q6ICdBJ1xyXG4gICAgbGluazogKCRzY29wZSwgJGVsZW1lbnQsICRhdHRycykgLT5cclxuICAgICAgJHNjb3BlLmxvY2F0aW9uID0gJGxvY2F0aW9uXHJcbiAgICAgICRzY29wZS4kd2F0Y2ggJ2xvY2F0aW9uLiQkdXJsJywgKGN1cnJlbnRVcmwpIC0+XHJcbiAgICAgICAgaWYgJGVsZW1lbnQuYXR0cihcImhyZWZcIikgPT0gJGxvY2F0aW9uLiQkcGF0aC5zcGxpdChcIi9cIikuc3BsaWNlKDAsMykuam9pbihcIi9cIilcclxuICAgICAgICAgICRlbGVtZW50LmFkZENsYXNzICdhY3RpdmUnXHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgJGVsZW1lbnQucmVtb3ZlQ2xhc3MgJ2FjdGl2ZSdcclxuXVxyXG4iXX0=
