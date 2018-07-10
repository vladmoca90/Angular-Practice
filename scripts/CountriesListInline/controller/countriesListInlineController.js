function countriesController($scope) {

    $scope.tableProperties = "table table-bordered";

    $scope.countriesListInlineStyles = {
        "max-width": "500px",
        "font-size": "18px",
        "font-family": "Ubuntu",
        "margin": "2% auto"
    }

    $scope.countriesTdStyles = {
        "padding": "10px 15px",
        "color": "#000000",
        "text-decoration": "none"
    }

    $scope.countries = [
        { countryName: "Germany" },
        { countryName: "United Kingdom" },
        { countryName: "France" },
        { countryName: "Italy" },
        { countryName: "Spain" }
    ];

}