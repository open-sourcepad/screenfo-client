(function() {
  var module;

  module = angular.module("ngEnter", []);

  module.directive('ngEnter', function() {
    return function(scope, element, attrs) {
      return element.bind('keydown keypress', function(event) {
        if (event.which === 13) {
          scope.$apply(function() {
            scope.$eval(attrs.ngEnter);
          });
          return event.preventDefault();
        }
      });
    };
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy9uZy1lbnRlci5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9uZy1lbnRlci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBOztFQUFBLE1BQUEsR0FBUyxPQUFPLENBQUMsTUFBUixDQUFlLFNBQWYsRUFBMEIsRUFBMUI7O0VBRVQsTUFBTSxDQUFDLFNBQVAsQ0FBaUIsU0FBakIsRUFBNEIsU0FBQTtXQUMxQixTQUFDLEtBQUQsRUFBUSxPQUFSLEVBQWlCLEtBQWpCO2FBQ0UsT0FBTyxDQUFDLElBQVIsQ0FBYSxrQkFBYixFQUFpQyxTQUFDLEtBQUQ7UUFDL0IsSUFBRyxLQUFLLENBQUMsS0FBTixLQUFlLEVBQWxCO1VBQ0UsS0FBSyxDQUFDLE1BQU4sQ0FBYSxTQUFBO1lBQ1gsS0FBSyxDQUFDLEtBQU4sQ0FBWSxLQUFLLENBQUMsT0FBbEI7VUFEVyxDQUFiO2lCQUdBLEtBQUssQ0FBQyxjQUFOLENBQUEsRUFKRjs7TUFEK0IsQ0FBakM7SUFERjtFQUQwQixDQUE1QjtBQUZBIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlID0gYW5ndWxhci5tb2R1bGUoXCJuZ0VudGVyXCIsIFtdKVxyXG5cclxubW9kdWxlLmRpcmVjdGl2ZSAnbmdFbnRlcicsIC0+XHJcbiAgKHNjb3BlLCBlbGVtZW50LCBhdHRycykgLT5cclxuICAgIGVsZW1lbnQuYmluZCAna2V5ZG93biBrZXlwcmVzcycsIChldmVudCkgLT5cclxuICAgICAgaWYgZXZlbnQud2hpY2ggPT0gMTNcclxuICAgICAgICBzY29wZS4kYXBwbHkgLT5cclxuICAgICAgICAgIHNjb3BlLiRldmFsIGF0dHJzLm5nRW50ZXJcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuIl19
