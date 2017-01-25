var app = angular.module("citiesApp", []);

app.controller("citiesCtrl", function ($scope) {

    $scope.tableDivisions = {
        "padding": "10px"
    }

    $scope.parisStyle = {
        "font-size": "18px",
        "color": "red",
        "font-weight": "bold"
    }

    $scope.londonStyle = {
        "font-style": "italic",
        "color": "green",
        "letter-spacing": "3px"
    }

    $scope.newYorkStyle = {

    }

});