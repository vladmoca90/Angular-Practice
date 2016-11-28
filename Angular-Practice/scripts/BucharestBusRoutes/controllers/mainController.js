function mainController($scope, $http) {

    $scope.BusesListHeadings = {
        headingName: "Bus Number",
        headingTo: "Origin",
        headingFrom: "Destination"
    }

    $scope.BusesList = [
        { name: "104", toDestination: "Piata Operei", fromDestination: "Stadion Lia Manoliu" },
        { name: "131", toDestination: "Piata Romana", fromDestination: "Complex Comercial Baneasa" },
        { name: "205", toDestination: "Gara de Nord", fromDestination: "Bioterra" },
        { name: "301", toDestination: "Piata Romana", fromDestination: "Perla" },
        { name: "336", toDestination: "Piata C.A. Rosetti", fromDestination: "Complex Apusului" }
    ];

}

mainController.$inject = ["$scope", "$http"];