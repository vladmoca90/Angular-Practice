function mainController($scope, $http) {

    $scope.CountriesList = {
        name: "Germany",
        name: "United Kingdom",
        name: "France",
        name: "Italy",
        name: "Spain"
    }

}

mainController.$inject = ["$scope", "$http"];