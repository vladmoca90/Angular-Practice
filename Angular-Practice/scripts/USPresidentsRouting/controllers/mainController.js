function mainController($scope, $http) {

    $scope.presidentsList = {
        name: "Barack Obama",
        name: "George W. Bush",
        name: "Bill Clinton",
        name: "Ronald Raegan"
    }

}

mainController.$inject = ["$scope", "$http"];

