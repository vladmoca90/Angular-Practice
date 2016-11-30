function mainController($scope, $http, $location) {

    $scope.BusesListHeadings = {
        headingName: "Bus Number",
        headingName: "Origin",
        headingName: "Destination"
    }

    $scope.BusesList = [
        { name: "104", toDestination: "Piata Operei", fromDestination: "Stadion Lia Manoliu" },
        { name: "131", toDestination: "Piata Romana", fromDestination: "Complex Comercial Baneasa" },
        { name: "205", toDestination: "Gara de Nord", fromDestination: "Bioterra" },
        { name: "301", toDestination: "Piata Romana", fromDestination: "Perla" },
        { name: "336", toDestination: "Piata C.A. Rosetti", fromDestination: "Complex Apusului" }
    ];

    $scope.goToBusName = function goToBusName(name) {
        $location.path("/bus205");
    }

    $scope.goToBustoDestination = function goToBustoDestination(toDestination) {
        $location.path("/bus336");
    }

    $scope.goToBusfromDestination = function goToBusfromDestination(fromDestination) {
        $location.path("/bus131");
    }

}

mainController.$inject = ["$scope", "$http", "$location"];