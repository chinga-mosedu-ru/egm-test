export class MainController {
  constructor($scope,ServerMock) {
    'ngInject';

    this.server = ServerMock;

    this.getItems(4);

    this.items =[];
    this.$scope = $scope;
  }


  getItems(count) {

    this.server.loadItems(count).then((data)=> {
      this.items = data.items;

      this.$scope.$broadcast('data.loaded');
    });
  }

}
