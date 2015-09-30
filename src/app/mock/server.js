/**
 * Created by user on 30.09.2015.
 */
export class ServerMock {


  constructor($q) {
    'ngInject';
    this.$q = $q;
  }

  loadItems(count) {

    return this.$q((resolve, reject)=> {
      setTimeout(function () {
        let items = [], min = 0, max = 100;
        for (let i = 0; i < count; i++) {
          items.push({
            Name: 'Item ' + i,
            Percent: Math.floor(Math.random() * (max - min + 1)) + min
          });
        }
        resolve({items});
      }, 100);
    })


  }

}
