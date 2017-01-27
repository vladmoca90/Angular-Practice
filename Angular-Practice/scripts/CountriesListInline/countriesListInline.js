var app = angular.module("countriesApp", []);

app.controller = (["countriesController"], function ($scope) {

    $scope.tableProperties = "table table-bordered"

    $scope.CountriesList = [
        { countryName: "Germany" },
        { countryName: "United Kingdom" },
        { countryName: "France" },
        { countryName: "Italy" },
        { countryName: "Spain" }
    ];

});