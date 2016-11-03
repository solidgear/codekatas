angular.module('StockApp', [])
  .controller('StockCtrl', ['$scope', '$http', function($scope, $http) {
    var SERVER_URL = 'http://localhost:3000';

    var vm = this;

    vm.products = [];

    /*
      fetch stock from GET request
     */
    vm.fetchStock = function() {
        $http({
            method: 'GET',
            url: SERVER_URL + '/api/products'
        })
        .then(function(response) {
            vm.products.length = 0;
            vm.products = vm.products.concat(response.data);
        })
        .catch(function(e) {
            console.log('there was an error', e)
        });
    };

    // configure real-time communication
    var socket = io(SERVER_URL);

    // product added event
    socket.on('stock-add', function(product){
        $scope.$apply(function() {
            vm.products.push(product);
        });
    });

    // product changed event
    socket.on('stock-change', function(product){
        $scope.$apply(function() {
            // replace the changed product in the scope list
            for(var i = 0; i < vm.products.length; i++) {
                var pr = vm.products[i];
                if (pr._id === product._id) {
                    vm.products[i] = product;
                    break;
                }
            } 
        });
    });

    // product removed event
    socket.on('stock-delete', function(product){
        $scope.$apply(function() {
            // remove the deleted product in the scope list
            for(var i = 0; i < vm.products.length; i++) {
                var pr = vm.products[i];
                if (pr._id === product._id) {
                    vm.products.splice(i, 1);
                    break;
                }
            }
        });
    });

    socket.on('connect', function () {
      console.log('connect');
        $scope.$apply(function() {
            // This is triggered on the startup of the page and whenever
            // a reconnect to the server happens (e.g. server restart), so
            // we do ask for all the stock as we don't know if changes have
            // happened in the meantime
            vm.fetchStock();
        });
    });

}]);