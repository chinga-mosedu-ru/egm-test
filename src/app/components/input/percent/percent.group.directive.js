export function percentGroupDirective() {

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/input/percent/percent.group.html',
    scope: {
      items: '='
    },
    controller: PercentGroup,
    controllerAs: 'ct',
    bindToController: true
  };

  return directive;
}

class PercentGroup {


  constructor($scope) {
    'ngInject';

    this.max = 100;
    $scope.$on('percent.changed', (e, {key,diff})=> {
      this.arrange(key, diff);
    });

    $scope.$on('lock.toggled', (e, {locked,value})=> {
      locked ? this.max -= value : this.max += value;

    });

    $scope.$on('data.loaded', ()=> {

      this.items = null;
      let watcher = $scope.$watch('items', ()=> {
        watcher();
        this.check();
        this.max = 100;
      });


    });


  }

  check() {
    let sum = 0;

    for (let key in this.items) {
      if (this.items.hasOwnProperty(key)) {

        sum += this.items[key].Percent;

      }
    }



    this.arrange(null, this.max - sum);

  }

  arrange(key, diff) {

    let item;
    //if (diff == 0 || diff > this.max || diff < -this.max) {
    //  return;
    //}


    if (diff < 0) {
      item = this.findMax(key);
      if (!item) {
        return;
      }

      if (item.Percent + diff < 0) {

        let newDiff = parseFloat(diff) + parseFloat(item.Percent);
        item.Percent = 0;
        return this.arrange(key, newDiff);

      }
    } else {
      item = this.findMin(key);

      if (!item) {
        return;
      }

      if (item.Percent + diff > this.max) {

        let newDiff = parseFloat(diff) - parseFloat(this.max - item.Percent);

        item.Percent = this.max;
        return this.arrange(key, newDiff);


      }
    }
    return item.Percent = Math.round((parseFloat(item.Percent) + parseFloat(diff)) * 1000) / 1000;
  }


  findMin(skip = null) {
    let min = this.max, found = 0;

    if (this.items.length == 1) {
      return false;
    }

    for (let key in this.items) {
      if (skip == key) {
        continue;
      }
      if (this.items.hasOwnProperty(key)) {
        if (this.items[key].locked) {
          continue;
        }

        if (this.items[key].Percent < min) {
          found = key;
        }
      }
    }

    return this.items[found];
  }

  findMax(skip = null) {
    let max = 0, found;
    if (this.items.length == 1) {
      return false;
    }

    for (let key in this.items) {
      if (skip == key) {
        continue;
      }
      if (this.items.hasOwnProperty(key)) {

        if (this.items[key].locked) {
          continue;
        }

        if (this.items[key].Percent > max) {
          found = key;
        }
      }
    }

    return this.items[found];
  }


}
