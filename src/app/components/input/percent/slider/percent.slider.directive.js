export function percentSliderDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/input/percent/slider/percent.slider.html',
    scope: {
      percent: '=',
      locked: '=',
      max: '=',
      key: '@'
    },
    controller: PercentSliderController,
    controllerAs: 'ct',
    bindToController: true
  };
  return directive;
}


class PercentSliderController {


  constructor($scope) {
    'ngInject';
    this.val = this.percent;
    this.$scope = $scope;
    this.$scope.$watch('ct.percent', (current)=> {
      console.log(this.percent);
      this.val = current
    });
  }

  startVal() {
    this.val = this.percent;
  }

  emitChange() {


    if (this.percent > this.max) {
      this.percent = this.max;
    }

    if (this.percent < 0) {
      this.percent = 0;
    }

    console.log(this.val, '->', this.percent);
    this.$scope.$emit('changed', {
      diff: this.val - this.percent
    });
    this.val = this.percent;
  }

}
