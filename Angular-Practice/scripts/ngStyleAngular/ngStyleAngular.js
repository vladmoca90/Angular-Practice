var app = angular.module("citiesApp", []);

app.controller("citiesCtrl", function ($scope) {

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

});