var app = angular.module("airlineTableApp", []);

app.controller("airlineTableCtrl", function () {

    $scope.headingList = {
        headingName: "Name",
        headingCountry: "Country",
        headingDestinations: "Destinations",
        headingFleet: "Fleet"
    }

    $scope.airlineList = [
        { airlineName: "British Airways", airlineCountry: "United Kingdom", airlineDestinations: "", airlineFleet: ""},
        { airlineName: "Air France", airlineCountry: "France", airlineDestinations: "", airlineFleet: ""},
        { airlineName: "Iberia", airlineCountry: "Spain", airlineDestinations: "", airlineFleet: ""},
        { airlineName: "Air Serbia", airlineCountry: "Serbia", airlineDestinations: "", airlineFleet: ""},
        { airlineName: "Swissair", airlineCountry: "Switzerland", airlineDestinations: "", airlineFleet: ""}

    ];

});,