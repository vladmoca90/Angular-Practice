var app = angular.module("airlineTableApp", []);

app.controller("airlineTableCtrl", function () {

     $scope.headingList = [
        headingName: "Name",
        headingCountry: "Country",
        headingDestinations: "Destinations",
        headingFleet: "Fleet"
    ];

    $scope.airlineList = [
        airlineName: "British Airways",
        airlineCountry: "United Kingdom",
        airlineDestinations: "",
        airlineFleet: "",
    ];

});