function routeSetup($routeProvider) {
    $routeProvider
    .when("/airlineName", {
        templateUrl: "templates/airlineName.html",
        controller: "airlineNameController"
    })
    .when("/airlineCountry", {
        templateUrl: "templates/airlineCountry.html",
        controller: "airlineCountryController"
    })
    .when("/airlineFleet", {
        templateUrl: "templates/airlineFleet.html",
        controller: "airlineFleetController"
    })
    .when("/airlineDestinations", {
        templateUrl: "templates/airlineDestinations.html",
        controller: "airlineDestinationsController"
    })
    .when("/error", {
        templateUrl: "templates/error.html",
        controller: "errorController"
    })
    .otherwise({
        redirectTo: "/error"
    });
}

routeSetup.$inject = [
    "$routeProvider"
];