var app = angular.module('catsList' );

app.component('cats', {
	templateUrl: '/templates/adoptCat.html'
});
app.controller('catsCtrl', function ($scope, $http,$window){
var getCats = function() {
	$http.get('/cats').then(
      function(response) {
        console.log(response.data);
        $scope.cats=response.data
        // alert(response.data);
      },
      function(response) {
        console.log(response.data);
        // alert(response.data);
      }
    );

};
getCats();

$scope.addCats = function() {
    $http.post('/addCats', $scope.$$watchers).then(
      function(response) {
        console.log(response.data);
        alert(response.data);
      },
      function(response) {
        console.log(response.data);
        // alert(response.data);
      }
    );
  };

});
