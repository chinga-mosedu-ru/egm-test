export function toNumber() {
  return {
    require: 'ngModel',
    restrict: 'A',
    link: function (scope, elem, attrs, ngModel) {

      ngModel.$parsers.push(function (value) {

        return '' + value ;
      });
      ngModel.$formatters.push(function (value) {

        if (value > 100) {
          value = 100;
        }

        if (value < 0) {
          value = 100;
        }


        return parseFloat(value, 10);
      });
    }
  };
};
