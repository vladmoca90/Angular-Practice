var app = angular.module("countriesApp", []);

function mainController($scope, $http, $location) {

    $scope.tableProperties = "table table-bordered"

    $scope.CountriesList = [
        { countryName: "Germany" },
        { countryName: "United Kingdom" },
        { countryName: "France" },
        { countryName: "Italy" },
        { countryName: "Spain" }
    ];

}