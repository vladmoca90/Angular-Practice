function mainController($scope, $http, $location) {

    $scope.airlinesList = [
        { airlineName: "LOT Polish", airlineCountry: "Poland", airlineFleet: "45", airlineDestinations: "60" },
        { airlineName: "Brussels Airlines", airlineCountry: "Belgium", airlineFleet: "50", airlineDestinations: "76" },
        { airlineName: "Thai Airways", airlineCountry: "Thailand", airlineFleet: "94", airlineDestinations: "80" },
        { airlineName: "TAG Angola Airlines", airlineCountry: "Angola", airlineFleet: "13", airlineDestinations: "31" }
    ];

    $scope.goToAirlineName = function goToAirlineName(name) {
        $location.path("/airlineName");
    }

    $scope.goToAirlineCountry = function goToAirlineCountry(country) {
        $location.path("/airlineCountry");
    }

    $scope.goToAirlineFleet = function goToAirlineFleet(fleet) {
        $location.path("/airlineFleet");
    }

    $scope.goToAirlineDestinations = function goToAirlineDestinations(destinations) {
        $location.path("/airlineDestinations");
    }

}

mainController.$inject = ["$scope", "$http", "$location"];