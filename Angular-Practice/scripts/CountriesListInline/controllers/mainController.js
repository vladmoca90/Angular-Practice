var app = angular.module("countriesApp", []);

app.controller("countriesCtrl", function ($scope) {

    $scope.listInlineOfCountries = "list-inline";

    $scope.CountriesList = {
        name: "Germany",
        name: "United Kingdom",
        name: "France",
        name: "Italy",
        name: "Spain"
    }

});