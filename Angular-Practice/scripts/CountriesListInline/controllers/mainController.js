function mainController($scope, $http, $location) {

    $scope.countriesInlineProperties = "list-inline list-unstyled;"

    $scope.CountriesList = [
        { countryName: "Germany" },
        { countryName: "United Kingdom" },
        { countryName: "France" },
        { countryName: "Italy" },
        { countryName: "Spain" }
    ];

}

mainController.$inject = ["$scope", "$http", "$location"];