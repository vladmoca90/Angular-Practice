function weatherForecastCtrl($scope) {

    $scope.position = {
        "center-block"
    }

    $scope.forecast = {
        "width": "300px",
        "margin": "2% auto",
        "font-size": "15px"
    };

    $scope.weather = {
        image: "../../images/NYCweather.jpg",
        location: "New York City",
        status: "Cloudy",
        temperature: "12 Celsius",
        windSpeed: "25 km/h"
    };

}

weatherForecastCtrl.$inject = ["$scope"];