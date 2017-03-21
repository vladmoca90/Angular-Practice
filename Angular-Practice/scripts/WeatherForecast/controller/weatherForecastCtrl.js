function weatherForecastCtrl($scope) {

    $scope.position = {
        "center-block"
    };

    $scope.forecast = {
        "width": "300px",
        "margin": "2% auto",
        "font-size": "15px"
    };

    $scope.weatherNY = {
        image: "../../images/NYCweather.jpg",
        location: "New York City",
        status: "Cloudy",
        temperature: "12 Celsius",
        windSpeed: "25 km/h"
    };

    $scope.weatherLA = {
        image: "../../images/LAweather.jpg",
        location: "Los Angeles",
        status: "Sunny",
        temperature: "16 Celsius",
        windSpeed: "15 km/h"
    };

    $scope.weatherSF = {
        image: "../../images/SFCweather.jpg",
        location: "San Francisco",
        status: "Cloudy",
        temperature: "18 Celsius",
        windSpeed: "20 km/h"
    };

    $scope.weatherMIA = {
        image: "../../images/MIAweather.jpg",
        location: "Miami",
        status: "Sunny",
        temperature: "24 Celsius",
        windSpeed: "7 km/h"
    };

}

weatherForecastCtrl.$inject = ["$scope"];