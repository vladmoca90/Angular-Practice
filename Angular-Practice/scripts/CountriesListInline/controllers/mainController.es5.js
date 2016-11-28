"use strict";

function mainController($scope, $http, $location) {

    $scope.countriesInlineProperties = "list-inline list-unstyled;";

    $scope.CountriesList = [{ countryName: "Germany" }, { countryName: "United Kingdom" }, { countryName: "France" }, { countryName: "Italy" }, { countryName: "Spain" }];

    $scope.goToCountryName = function goToCountryName(country) {
        $location.path("/Germany");
    };

    $scope.goToCountryName = function goToCountryName(country) {
        $location.path("/UK");
    };

    $scope.goToCountryName = function goToCountryName(country) {
        $location.path("/France");
    };

    $scope.goToCountryName = function goToCountryName(country) {
        $location.path("/Italy");
    };

    $scope.goToCountryName = function goToCountryName(country) {
        $location.path("/Spain");
    };
}

mainController.$inject = ["$scope", "$http", "$location"];

