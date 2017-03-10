(function() {
  var Ctrl;

  Ctrl = function() {
    var ctrl;
    ctrl = this;
    ctrl.$onInit = function() {
      return this.creds = {
        username: '',
        password: '',
        third_party: ''
      };
    };
    ctrl.onSubmit = function(form) {
      form.$submitted = true;
      if (form.$valid) {
        this.creds.third_party = this.integrationType;
        return this.submit({
          obj: this.creds
        });
      }
    };
  };

  angular.module('client').component('integrateModal', {
    templateUrl: "app/components/integration_modal/index.html",
    controller: Ctrl,
    bindings: {
      integrationType: "=",
      show: "=",
      toggle: "&",
      submit: "&"
    }
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy9pbnRlZ3JhdGlvbl9tb2RhbC9jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaW50ZWdyYXRpb25fbW9kYWwvY29tcG9uZW50LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQUE7O0VBQUEsSUFBQSxHQUFPLFNBQUE7QUFDTCxRQUFBO0lBQUEsSUFBQSxHQUFPO0lBRVAsSUFBSSxDQUFDLE9BQUwsR0FBZSxTQUFBO2FBQ2IsSUFBQyxDQUFDLEtBQUYsR0FDRTtRQUFBLFFBQUEsRUFBVSxFQUFWO1FBQ0EsUUFBQSxFQUFVLEVBRFY7UUFFQSxXQUFBLEVBQWEsRUFGYjs7SUFGVztJQU1mLElBQUksQ0FBQyxRQUFMLEdBQWUsU0FBQyxJQUFEO01BQ2IsSUFBSSxDQUFDLFVBQUwsR0FBa0I7TUFDbEIsSUFBRyxJQUFJLENBQUMsTUFBUjtRQUNFLElBQUMsQ0FBQyxLQUFLLENBQUMsV0FBUixHQUFzQixJQUFDLENBQUM7ZUFDeEIsSUFBQyxDQUFDLE1BQUYsQ0FBUztVQUFDLEdBQUEsRUFBSyxJQUFDLENBQUMsS0FBUjtTQUFULEVBRkY7O0lBRmE7RUFUVjs7RUFnQlAsT0FBTyxDQUFDLE1BQVIsQ0FBZSxRQUFmLENBQXdCLENBQUMsU0FBekIsQ0FBbUMsZ0JBQW5DLEVBQ0U7SUFBQSxXQUFBLEVBQWEsNkNBQWI7SUFDQSxVQUFBLEVBQVksSUFEWjtJQUVBLFFBQUEsRUFDRTtNQUFBLGVBQUEsRUFBaUIsR0FBakI7TUFDQSxJQUFBLEVBQU0sR0FETjtNQUVBLE1BQUEsRUFBUSxHQUZSO01BR0EsTUFBQSxFQUFRLEdBSFI7S0FIRjtHQURGO0FBaEJBIiwic291cmNlc0NvbnRlbnQiOlsiQ3RybCA9IC0+XG4gIGN0cmwgPSB0aGlzXG5cbiAgY3RybC4kb25Jbml0ID0gLT5cbiAgICBALmNyZWRzID1cbiAgICAgIHVzZXJuYW1lOiAnJ1xuICAgICAgcGFzc3dvcmQ6ICcnXG4gICAgICB0aGlyZF9wYXJ0eTogJydcblxuICBjdHJsLm9uU3VibWl0ID0oZm9ybSktPlxuICAgIGZvcm0uJHN1Ym1pdHRlZCA9IHRydWVcbiAgICBpZiBmb3JtLiR2YWxpZFxuICAgICAgQC5jcmVkcy50aGlyZF9wYXJ0eSA9IEAuaW50ZWdyYXRpb25UeXBlXG4gICAgICBALnN1Ym1pdCh7b2JqOiBALmNyZWRzfSlcblxuICByZXR1cm5cbmFuZ3VsYXIubW9kdWxlKCdjbGllbnQnKS5jb21wb25lbnQgJ2ludGVncmF0ZU1vZGFsJyxcbiAgdGVtcGxhdGVVcmw6IFwiYXBwL2NvbXBvbmVudHMvaW50ZWdyYXRpb25fbW9kYWwvaW5kZXguaHRtbFwiXG4gIGNvbnRyb2xsZXI6IEN0cmxcbiAgYmluZGluZ3M6XG4gICAgaW50ZWdyYXRpb25UeXBlOiBcIj1cIlxuICAgIHNob3c6IFwiPVwiXG4gICAgdG9nZ2xlOiBcIiZcIlxuICAgIHN1Ym1pdDogXCImXCJcbiJdfQ==
