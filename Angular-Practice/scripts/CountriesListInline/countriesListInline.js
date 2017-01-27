var app = angular.module("countriesApp", []);

app.controller("countriesController", function ($scope) {

    $scope.tableProperties = "table table-bordered";

    $scope.countriesListInlineStyles = {
        "max-width": "500px",
        "font-size": "18px",
        "font-family": "Ubuntu"
    }

    $scope.CountriesList = [
        { countryName: "Germany" },
        { countryName: "United Kingdom" },
        { countryName: "France" },
        { countryName: "Italy" },
        { countryName: "Spain" }
    ];

});