function mainController($scope, $http) {

    $scope.BusesListHeadings = {
        headingName: "Bus Number", headingTo: "Origin", headingFrom: "Destination"
    }

    $scope.BusesList = [
        { name: "104", toDeatination: "Piata Operei", fromDestination: "Stadion Lia Manoliu" },
        { name: "131", toDeatination: "Piata Romana", fromDestination: "Complex Comercial Baneasa" },
        { name: "205", toDeatination: "Gara de Nord", fromDestination: "Bioterra" },
        { name: "301", toDeatination: "Piata Romana", fromDestination: "Perla" },
        { name: "336", toDeatination: "Piata C.A. Rosetti", fromDestination: "Complex Apusului" }
    ];

}

mainController.$inject = ["$scope", "$http"];