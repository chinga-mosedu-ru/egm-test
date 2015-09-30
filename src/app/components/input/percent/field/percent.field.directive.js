export function percentFieldDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/input/percent/field/percent.field.html',
    scope: {
      percent: '=',
      max: '=',
      locked: '='

    },
    controller: PercentFieldController,
    controllerAs: 'ct',
    bindToController: true
  };
  return directive;
}


class PercentFieldController {


  constructor($scope) {
    'ngInject';
    this.val = this.percent;
    this.$scope = $scope;
  }


  startVal() {
    this.val = this.percent;
  }

  emitChange() {

    if (this.percent > 100 || this.percent < 0 || !this.percent) {
      this.percent = this.val;
    }


    this.$scope.$emit('changed', {
      diff: this.val - this.percent
    });
    this.val = this.percent;
  }


  filterValue($event) {
    let keyCode = $event.keyCode;

    if (keyCode == 46 || keyCode == 8 || keyCode == 9
      || keyCode == 27 || keyCode == 13
      || (keyCode == 65 && event.ctrlKey === true)
      || (keyCode >= 35 && keyCode <= 39)) {
      return true;
    } else {
      // If it's not a number stop the keypress
      if ($event.shiftKey || (keyCode < 48 || keyCode > 57) && (keyCode < 96 || keyCode > 105 )) {
        $event.preventDefault();
        return false;
      }
    }

  }
}
