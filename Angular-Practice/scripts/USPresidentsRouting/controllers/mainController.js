function mainController($scope, $http) {

    $scope.presidents = [
        { presidentName: "Barack Obama" },
        { presidentName: "George W. Bush" },
        { presidentName: "Bill Clinton" },
        { presidentName: "Ronald Raegan"}
    ];

    $scope.mainBoxStyle = {
        "height": "400px"
    }

}

mainController.$inject = ["$scope", "$http"];

