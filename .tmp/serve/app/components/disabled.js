(function() {
  var module;

  module = angular.module("ToggableField", []);

  module.directive('toggableField', [
    '$location', function($location) {
      return {
        restrict: 'C',
        scope: {
          isDisabled: "="
        },
        link: function($scope, $element, $attrs) {
          if (!!$scope.isDisabled) {
            return $element.addClass('disabled');
          }
        }
      };
    }
  ]);

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy9kaXNhYmxlZC5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9kaXNhYmxlZC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBOztFQUFBLE1BQUEsR0FBUyxPQUFPLENBQUMsTUFBUixDQUFlLGVBQWYsRUFBZ0MsRUFBaEM7O0VBR1QsTUFBTSxDQUFDLFNBQVAsQ0FBaUIsZUFBakIsRUFBa0M7SUFDaEMsV0FEZ0MsRUFFaEMsU0FBQyxTQUFEO2FBQ0U7UUFBQSxRQUFBLEVBQVUsR0FBVjtRQUNBLEtBQUEsRUFDRTtVQUFBLFVBQUEsRUFBWSxHQUFaO1NBRkY7UUFHQSxJQUFBLEVBQU0sU0FBQyxNQUFELEVBQVMsUUFBVCxFQUFtQixNQUFuQjtVQUNKLElBQWlDLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBMUM7bUJBQUEsUUFBUSxDQUFDLFFBQVQsQ0FBa0IsVUFBbEIsRUFBQTs7UUFESSxDQUhOOztJQURGLENBRmdDO0dBQWxDO0FBSEEiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUgPSBhbmd1bGFyLm1vZHVsZShcIlRvZ2dhYmxlRmllbGRcIiwgW10pXHJcblxyXG5cclxubW9kdWxlLmRpcmVjdGl2ZSAndG9nZ2FibGVGaWVsZCcsIFtcclxuICAnJGxvY2F0aW9uJ1xyXG4gICgkbG9jYXRpb24pIC0+XHJcbiAgICByZXN0cmljdDogJ0MnXHJcbiAgICBzY29wZTpcclxuICAgICAgaXNEaXNhYmxlZDogXCI9XCJcclxuICAgIGxpbms6ICgkc2NvcGUsICRlbGVtZW50LCAkYXR0cnMpIC0+XHJcbiAgICAgICRlbGVtZW50LmFkZENsYXNzKCdkaXNhYmxlZCcpIGlmICEhJHNjb3BlLmlzRGlzYWJsZWRcclxuXHJcbl1cclxuIl19
