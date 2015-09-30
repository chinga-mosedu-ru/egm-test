export function percentControlDirective() {

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/input/percent/percent.control.html',
    controller: PercentControl,
    controllerAs: 'ct',
    scope: {
      label: '=',
      percent: '=',
      locked: '=',
      max: '=',
      key: '=index'
    },
    bindToController: true,

  };

  return directive;
}

class PercentControl {
  constructor($scope) {
    'ngInject';
    $scope.$on('changed', ($event, {diff})=> {
      $event.stopPropagation();
      $scope.$emit('percent.changed', {
        diff: diff,
        key: this.key
      })
    });

    this.$scope = $scope;
  }

  toggleLock() {

    this.locked = !this.locked;

    this.$scope.$emit('lock.toggled', {locked: this.locked, value: this.percent});


  }

}
