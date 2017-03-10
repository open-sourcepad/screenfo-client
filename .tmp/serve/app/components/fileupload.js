(function() {
  var module;

  module = angular.module("fileModel", []);

  module.directive('fileModel', [
    '$parse', function($parse) {
      return {
        restrict: 'A',
        link: function(scope, element, attrs) {
          var isMultiple, model, modelSetter;
          model = $parse(attrs.fileModel);
          isMultiple = attrs.multiple;
          modelSetter = model.assign;
          element.bind('change', function() {
            var values;
            values = [];
            angular.forEach(element[0].files, function(item) {
              var value;
              value = {
                name: item.name,
                size: item.size,
                url: URL.createObjectURL(item),
                _file: item
              };
              values.push(value);
            });
            scope.$apply(function() {
              if (isMultiple) {
                modelSetter(scope, values);
              } else {
                modelSetter(scope, values[0]);
              }
            });
          });
        }
      };
    }
  ]);

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy9maWxldXBsb2FkLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlcyI6WyJjb21wb25lbnRzL2ZpbGV1cGxvYWQuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBQTs7RUFBQSxNQUFBLEdBQVMsT0FBTyxDQUFDLE1BQVIsQ0FBZSxXQUFmLEVBQTRCLEVBQTVCOztFQUVULE1BQU0sQ0FBQyxTQUFQLENBQWlCLFdBQWpCLEVBQThCO0lBQzVCLFFBRDRCLEVBRTVCLFNBQUMsTUFBRDthQUNFO1FBWUUsUUFBQSxFQUFVLEdBWlo7UUFhRSxJQUFBLEVBQU0sU0FBQyxLQUFELEVBQVEsT0FBUixFQUFpQixLQUFqQjtBQUNKLGNBQUE7VUFBQSxLQUFBLEdBQVEsTUFBQSxDQUFPLEtBQUssQ0FBQyxTQUFiO1VBQ1IsVUFBQSxHQUFhLEtBQUssQ0FBQztVQUNuQixXQUFBLEdBQWMsS0FBSyxDQUFDO1VBQ3BCLE9BQU8sQ0FBQyxJQUFSLENBQWEsUUFBYixFQUF1QixTQUFBO0FBQ3JCLGdCQUFBO1lBQUEsTUFBQSxHQUFTO1lBQ1QsT0FBTyxDQUFDLE9BQVIsQ0FBZ0IsT0FBUSxDQUFBLENBQUEsQ0FBRSxDQUFDLEtBQTNCLEVBQWtDLFNBQUMsSUFBRDtBQUNoQyxrQkFBQTtjQUFBLEtBQUEsR0FDRTtnQkFBQSxJQUFBLEVBQU0sSUFBSSxDQUFDLElBQVg7Z0JBQ0EsSUFBQSxFQUFNLElBQUksQ0FBQyxJQURYO2dCQUVBLEdBQUEsRUFBSyxHQUFHLENBQUMsZUFBSixDQUFvQixJQUFwQixDQUZMO2dCQUdBLEtBQUEsRUFBTyxJQUhQOztjQUlGLE1BQU0sQ0FBQyxJQUFQLENBQVksS0FBWjtZQU5nQyxDQUFsQztZQVFBLEtBQUssQ0FBQyxNQUFOLENBQWEsU0FBQTtjQUNYLElBQUcsVUFBSDtnQkFDRSxXQUFBLENBQVksS0FBWixFQUFtQixNQUFuQixFQURGO2VBQUEsTUFBQTtnQkFHRSxXQUFBLENBQVksS0FBWixFQUFtQixNQUFPLENBQUEsQ0FBQSxDQUExQixFQUhGOztZQURXLENBQWI7VUFWcUIsQ0FBdkI7UUFKSSxDQWJSOztJQURGLENBRjRCO0dBQTlCO0FBRkEiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUgPSBhbmd1bGFyLm1vZHVsZShcImZpbGVNb2RlbFwiLCBbXSlcclxuXHJcbm1vZHVsZS5kaXJlY3RpdmUgJ2ZpbGVNb2RlbCcsIFtcclxuICAnJHBhcnNlJ1xyXG4gICgkcGFyc2UpIC0+XHJcbiAgICB7XHJcbiAgICAgICMgcmVzdHJpY3Q6ICdBJ1xyXG4gICAgICAjIGxpbms6IChzY29wZSwgZWxlbWVudCwgYXR0cnMpIC0+XHJcbiAgICAgICMgICBtb2RlbCA9ICRwYXJzZShhdHRycy5maWxlTW9kZWwpXHJcbiAgICAgICMgICBtb2RlbFNldHRlciA9IG1vZGVsLmFzc2lnblxyXG4gICAgICAjICAgZWxlbWVudC5iaW5kICdjaGFuZ2UnLCAtPlxyXG4gICAgICAjICAgICBzY29wZS4kYXBwbHkgLT5cclxuICAgICAgIyAgICAgICBtb2RlbFNldHRlciBzY29wZSwgZWxlbWVudFswXS5maWxlc1swXVxyXG4gICAgICAjICAgICAgIHJldHVyblxyXG4gICAgICAjICAgICByZXR1cm5cclxuICAgICAgIyAgIHJldHVyblxyXG5cclxuICAgICAgcmVzdHJpY3Q6ICdBJ1xyXG4gICAgICBsaW5rOiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSAtPlxyXG4gICAgICAgIG1vZGVsID0gJHBhcnNlKGF0dHJzLmZpbGVNb2RlbClcclxuICAgICAgICBpc011bHRpcGxlID0gYXR0cnMubXVsdGlwbGVcclxuICAgICAgICBtb2RlbFNldHRlciA9IG1vZGVsLmFzc2lnblxyXG4gICAgICAgIGVsZW1lbnQuYmluZCAnY2hhbmdlJywgLT5cclxuICAgICAgICAgIHZhbHVlcyA9IFtdXHJcbiAgICAgICAgICBhbmd1bGFyLmZvckVhY2ggZWxlbWVudFswXS5maWxlcywgKGl0ZW0pIC0+XHJcbiAgICAgICAgICAgIHZhbHVlID1cclxuICAgICAgICAgICAgICBuYW1lOiBpdGVtLm5hbWVcclxuICAgICAgICAgICAgICBzaXplOiBpdGVtLnNpemVcclxuICAgICAgICAgICAgICB1cmw6IFVSTC5jcmVhdGVPYmplY3RVUkwoaXRlbSlcclxuICAgICAgICAgICAgICBfZmlsZTogaXRlbVxyXG4gICAgICAgICAgICB2YWx1ZXMucHVzaCB2YWx1ZVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgIHNjb3BlLiRhcHBseSAtPlxyXG4gICAgICAgICAgICBpZiBpc011bHRpcGxlXHJcbiAgICAgICAgICAgICAgbW9kZWxTZXR0ZXIgc2NvcGUsIHZhbHVlc1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgbW9kZWxTZXR0ZXIgc2NvcGUsIHZhbHVlc1swXVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIHJldHVyblxyXG4gICAgfVxyXG5dIl19
