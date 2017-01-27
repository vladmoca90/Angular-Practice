var app = angular.module("citiesApp", []);

app.controller("citiesCtrl", function ($scope) {

    $scope.tableType = "table table-bordered";

    $scope.tableStyles = {
        "width": "50%",
        "margin": "3% auto",
        "text-align": "center"
    }

    $scope.parisStyle = {
        "font-size": "18px",
        "color": "red",
        "font-weight": "bold"
    }

    $scope.londonStyle = {
        "font-style": "italic",
        "color": "green",
        "font-size": "18px"
    }

    $scope.newYorkStyle = {
        "color": "orange",
        "font-family": "Verdana",
        "font-size": "15px",
        "font-weight": "500"
    }

    $scope.madridStyle = {
        "color": "purple",
        "letter-spacing": "3px",
        "font-family": "Andalus",
        "font-size": "20px"
    }

});