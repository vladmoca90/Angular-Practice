function mainController($scope, $http) {

    $scope.presidentsList = {
        presidentName: "Barack Obama",
        presidentName: "George W. Bush",
        presidentName: "Bill Clinton",
        presidentName: "Ronald Raegan"
    }

}

mainController.$inject = ["$scope", "$http"];

