function mainController($scope, $http) {

    $scope.presidentsList = {
        name: [
            "Barack Obama",
            "George W. Bush",
            "Bill Clinton",
            "Ronald Raegan"
        ]
    }

}

mainController.$inject = ["$scope", "$http"];

