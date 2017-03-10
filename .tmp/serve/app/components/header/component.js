(function() {
  var Ctrl;

  Ctrl = function($scope, Auth, $rootScope) {};

  angular.module('client').directive('header', function() {
    return {
      restrict: "E",
      replace: true,
      templateUrl: 'app/components/header/index.html',
      controller: Ctrl
    };
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy9oZWFkZXIvY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlcyI6WyJjb21wb25lbnRzL2hlYWRlci9jb21wb25lbnQuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBQTs7RUFBQSxJQUFBLEdBQU0sU0FBQyxNQUFELEVBQVEsSUFBUixFQUFhLFVBQWIsR0FBQTs7RUFJTixPQUFPLENBQUMsTUFBUixDQUFlLFFBQWYsQ0FBd0IsQ0FBQyxTQUF6QixDQUFtQyxRQUFuQyxFQUE0QyxTQUFBO1dBQzFDO01BQUEsUUFBQSxFQUFVLEdBQVY7TUFDQSxPQUFBLEVBQVMsSUFEVDtNQUVBLFdBQUEsRUFBYSxrQ0FGYjtNQUdBLFVBQUEsRUFBWSxJQUhaOztFQUQwQyxDQUE1QztBQUpBIiwic291cmNlc0NvbnRlbnQiOlsiQ3RybCA9KCRzY29wZSxBdXRoLCRyb290U2NvcGUpLT5cclxuXHJcblxyXG5cclxuYW5ndWxhci5tb2R1bGUoJ2NsaWVudCcpLmRpcmVjdGl2ZSAnaGVhZGVyJywtPlxyXG4gIHJlc3RyaWN0OiBcIkVcIlxyXG4gIHJlcGxhY2U6IHRydWVcclxuICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL2hlYWRlci9pbmRleC5odG1sJ1xyXG4gIGNvbnRyb2xsZXI6IEN0cmxcclxuIl19
