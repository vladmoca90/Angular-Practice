"use strict";

function mainController($scope, $http, $location) {

    $scope.tableProperties = "table table-bordered";

    $scope.CountriesList = [{ countryName: "Germany" }, { countryName: "United Kingdom" }, { countryName: "France" }, { countryName: "Italy" }, { countryName: "Spain" }];

    $scope.goToCountryGermany = function goToCountryGermany(country) {
        $location.path("/Germany");
    };

    $scope.goToCountryUK = function goToCountryUK(country) {
        $location.path("/UK");
    };

    $scope.goToCountryFrance = function goToCountryFrance(country) {
        $location.path("/France");
    };

    $scope.goToCountryItaly = function goToCountryItaly(country) {
        $location.path("/Italy");
    };

    $scope.goToCountrySpain = function goToCountrySpain(country) {
        $location.path("/Spain");
    };
}

mainController.$inject = ["$scope", "$http", "$location"];

