(function(){
'use strict'

angular.module('lunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
$scope.items="";
console.log($scope.items.length);
$scope.checkLunch = function(){
    if($scope.items){
        return $scope.items.split(',').join(' ');
    }
    
if($scope.items.length>=2) {
        $scope.message ="Enjoy";
    }else {
        $scope.message = "too much";
    }
}
}})();