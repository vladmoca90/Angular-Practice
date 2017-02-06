function mainCtrl($scope) {

    $scope.boxPosition = "center-block";

    $scope.mainBox = {
        "width": "600px",
        "height": "600px",
        "background": "gold",
        "border": "1px solid #000"
    }

}

mainCtrl.$inject = ["$scope"];