function weatherForecastCtrl($scope) {

    $scope.cities = [
        { picture: "../../../images/weatherForecast/NYCweather.jpg", name: "New York City", degrees: "18 Celsius", wind: "15km/h" },
        { picture: "../../../images/weatherForecast/LAweather.jpg", name: "Los Angeles", degrees: "23 Celsius", wind: "14km/h" },
        { picture: "../../../images/weatherForecast/SFweather.jpg", name: "San Francisco", degrees: "15 Celsius", wind: "23km/h" },
        { picture: "../../../images/weatherForecast/MIAweather.jpg", name: "Miami", degrees: "29 Celsius", wind: "7km/h" },
    ];

}

weatherForecastCtrl.$inject = ["$scope"];