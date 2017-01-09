function mainController($scope, $http, $location) {

    $scope.tableProperties = "table table-bordered"

    $scope.CountriesList = [
        { countryName: "Germany" },
        { countryName: "United Kingdom" },
        { countryName: "France" },
        { countryName: "Italy" },
        { countryName: "Spain" }
    ];

    $scope.goToCountryGermany = function goToCountryGermany(germany) {
        $location.path("/Germany");
    }

    $scope.goToCountryUK = function goToCountryUK(uk) {
        $location.path("/UK");
    }

    $scope.goToCountryFrance = function goToCountryFrance(france) {
        $location.path("/France");
    }

    $scope.goToCountryItaly = function goToCountryItaly(italy) {
        $location.path("/Italy");
    }

    $scope.goToCountrySpain = function goToCountrySpain(spain) {
        $location.path("/Spain");
    }

}

mainController.$inject = ["$scope", "$http", "$location"];