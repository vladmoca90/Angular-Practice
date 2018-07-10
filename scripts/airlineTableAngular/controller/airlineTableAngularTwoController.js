function airlineTableTwoController($scope) {

    $scope.tableTwo = {
        "margin-top": "50px",
        "font-size": "16px",
        "width": "450px",
        "margin": "40px auto"
    }

    $scope.airlineTableTwoStyles = "table table-bordered";

    $scope.airlines = [
        { airlineName: "Icelandair", airlineCountry: "Iceland", airlineDestinations: "-" },
        { airlineName: "EVA Air", airlineCountry: "Taiwan", airlineDestinations: "-" },
        { airlineName: "Air Astana", airlineCountry: "Kazakhstan", airlineDestinations: "-" },
        { airlineName: "All Nippon Airways", airlineCountry: "Japan", airlineDestinations: "-" }
    ];

}

airlineTableTwoController.$inject = ["$scope"];