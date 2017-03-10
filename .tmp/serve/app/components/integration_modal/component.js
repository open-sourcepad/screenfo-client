(function() {
  var Ctrl;

  Ctrl = function() {
    var ctrl;
    ctrl = this;
    ctrl.$onInit = function() {
      return this.creds = {
        email: '',
        password: '',
        type: ''
      };
    };
    ctrl.onSubmit = function(form) {
      form.$submitted = true;
      if (form.$valid) {
        this.creds.type = this.integrationType;
        return this.submit({
          obj: this.creds
        });
      }
    };
  };

  angular.module('client').component('integrateModal', {
    templateUrl: "/app/components/integration_modal/index.html",
    controller: Ctrl,
    bindings: {
      integrationType: "=",
      show: "=",
      toggle: "&",
      submit: "&"
    }
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy9pbnRlZ3JhdGlvbl9tb2RhbC9jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaW50ZWdyYXRpb25fbW9kYWwvY29tcG9uZW50LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQUE7O0VBQUEsSUFBQSxHQUFPLFNBQUE7QUFDTCxRQUFBO0lBQUEsSUFBQSxHQUFPO0lBRVAsSUFBSSxDQUFDLE9BQUwsR0FBZSxTQUFBO2FBQ2IsSUFBQyxDQUFDLEtBQUYsR0FDRTtRQUFBLEtBQUEsRUFBTyxFQUFQO1FBQ0EsUUFBQSxFQUFVLEVBRFY7UUFFQSxJQUFBLEVBQU0sRUFGTjs7SUFGVztJQU1mLElBQUksQ0FBQyxRQUFMLEdBQWUsU0FBQyxJQUFEO01BQ2IsSUFBSSxDQUFDLFVBQUwsR0FBa0I7TUFDbEIsSUFBRyxJQUFJLENBQUMsTUFBUjtRQUNFLElBQUMsQ0FBQyxLQUFLLENBQUMsSUFBUixHQUFlLElBQUMsQ0FBQztlQUNqQixJQUFDLENBQUMsTUFBRixDQUFTO1VBQUMsR0FBQSxFQUFLLElBQUMsQ0FBQyxLQUFSO1NBQVQsRUFGRjs7SUFGYTtFQVRWOztFQWdCUCxPQUFPLENBQUMsTUFBUixDQUFlLFFBQWYsQ0FBd0IsQ0FBQyxTQUF6QixDQUFtQyxnQkFBbkMsRUFDRTtJQUFBLFdBQUEsRUFBYSw4Q0FBYjtJQUNBLFVBQUEsRUFBWSxJQURaO0lBRUEsUUFBQSxFQUNFO01BQUEsZUFBQSxFQUFpQixHQUFqQjtNQUNBLElBQUEsRUFBTSxHQUROO01BRUEsTUFBQSxFQUFRLEdBRlI7TUFHQSxNQUFBLEVBQVEsR0FIUjtLQUhGO0dBREY7QUFoQkEiLCJzb3VyY2VzQ29udGVudCI6WyJDdHJsID0gLT5cclxuICBjdHJsID0gdGhpc1xyXG5cclxuICBjdHJsLiRvbkluaXQgPSAtPlxyXG4gICAgQC5jcmVkcyA9XHJcbiAgICAgIGVtYWlsOiAnJ1xyXG4gICAgICBwYXNzd29yZDogJydcclxuICAgICAgdHlwZTogJydcclxuXHJcbiAgY3RybC5vblN1Ym1pdCA9KGZvcm0pLT5cclxuICAgIGZvcm0uJHN1Ym1pdHRlZCA9IHRydWVcclxuICAgIGlmIGZvcm0uJHZhbGlkXHJcbiAgICAgIEAuY3JlZHMudHlwZSA9IEAuaW50ZWdyYXRpb25UeXBlXHJcbiAgICAgIEAuc3VibWl0KHtvYmo6IEAuY3JlZHN9KVxyXG5cclxuICByZXR1cm5cclxuYW5ndWxhci5tb2R1bGUoJ2NsaWVudCcpLmNvbXBvbmVudCAnaW50ZWdyYXRlTW9kYWwnLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi9hcHAvY29tcG9uZW50cy9pbnRlZ3JhdGlvbl9tb2RhbC9pbmRleC5odG1sXCJcclxuICBjb250cm9sbGVyOiBDdHJsXHJcbiAgYmluZGluZ3M6XHJcbiAgICBpbnRlZ3JhdGlvblR5cGU6IFwiPVwiXHJcbiAgICBzaG93OiBcIj1cIlxyXG4gICAgdG9nZ2xlOiBcIiZcIlxyXG4gICAgc3VibWl0OiBcIiZcIiJdfQ==
