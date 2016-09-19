function routeSetup($routeProvider) {
    $routeProvider
    .when("/airlineName", {
        templateUrl: "scripts/templates/airlineName.html",
        controller: "airlineNameController"
    })
    .when("/airlineCountry", {
        templateUrl: "scripts/templates/airlineCountry.html",
        controller: "airlineCountryController"
    })
    .when("/airlineFleet", {
        templateUrl: "scripts/templates/airlineFleet.html",
        controller: "airlineFleetController"
    })
    .when("/airlineDestinations", {
        templateUrl: "scripts/templates/airlineDestinations.html",
        controller: "airlineDestinationsController"
    })
    .when("/error", {
        templateUrl: "scripts/templates/error.html",
        controller: "errorController"
    })
    .otherwise({
        redirectTo: "/error"
    });
}

routeSetup.$inject = [
    "$routeProvider"
];