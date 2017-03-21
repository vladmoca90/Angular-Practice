function weatherForecastCtrl($scope) {

    $scope.weather = {
        location: "New York City",
        status: "Cloudy",
        temperature: "12 Celsius",
        windSpeed: "25 km/h"
    }

}

weatherForecastCtrl.$inject = ["$scope"];