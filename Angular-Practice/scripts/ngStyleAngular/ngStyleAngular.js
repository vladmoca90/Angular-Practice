var app = angular.module("citiesApp", []);

app.controller("citiesCtrl", function ($scope) {

    $scope.tableType = "table table-bordered";

    $scope.tableStyles = {
        "width": "50%",
        "margin": "3% auto"
    }

    $scope.parisStyle = {
        "font-size": "18px",
        "color": "red",
        "font-weight": "bold"
    }

    $scope.londonStyle = {
        "font-style": "italic",
        "color": "green"
    }

    $scope.newYorkStyle = {
        "color": "orange"
    }

    $scope.madridStyle = {
        "color": "purple",
        "letter-spacing": "3px"
    }

});