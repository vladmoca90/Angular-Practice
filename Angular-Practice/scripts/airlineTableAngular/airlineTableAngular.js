var app = angular.module("airlineTableApp", []);

app.controller("airlineTableCtrl", function ($scope) {

    $scope.tableProperties = "table table-bordered";

    $scope.airlineList = [
        { airlineName: "British Airways", airlineCountry: "United Kingdom", airlineDestinations: "183", airlineFleet: "297"},
        { airlineName: "Air France", airlineCountry: "France", airlineDestinations: "204", airlineFleet: "235"},
        { airlineName: "Iberia", airlineCountry: "Spain", airlineDestinations: "89", airlineFleet: "79"},
        { airlineName: "Air Serbia", airlineCountry: "Serbia", airlineDestinations: "44", airlineFleet: "21"},
        { airlineName: "Swiss International Air Lines", airlineCountry: "Switzerland", airlineDestinations: "106", airlineFleet: "68"}
    ];

});