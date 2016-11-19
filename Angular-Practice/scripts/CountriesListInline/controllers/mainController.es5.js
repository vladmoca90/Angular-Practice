"use strict";

function mainController($scope, $http) {

    $scope.countriesInlineProperties = "list-inline list-unstyled;";

    $scope.CountriesList = [{ countryName: "Germany" }, { countryName: "United Kingdom" }, { countryName: "France" }, { countryName: "Italy" }, { countryName: "Spain" }];
}

mainController.$inject = ["$scope", "$http"];

