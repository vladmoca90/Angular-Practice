function mainController($scope, $http) {

    $scope.BusesListHeadings = {
        headingName: "Bus Number", headingTo: "Origin", headingFrom: "Destination"
    }

    $scope.BusesList = [
        {},
        {},
        {},
        {},
        {}
    ];


}

mainController.$inject = ["$scope", "$http"];