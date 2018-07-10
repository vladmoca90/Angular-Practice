function routeSetup($routeProvider) {
    $routeProvider
    .when("/airlineName", {
        templateUrl: "../../scripts/airlinesAngularRoute/templates/airlineName.html",
        controller: "airlineNameController"
    })
    .when("/airlineCountry", {
        templateUrl: "../../scripts/airlinesAngularRoute/templates/airlineCountry.html",
        controller: "airlineCountryController"
    })
    .when("/airlineFleet", {
        templateUrl: "../../scripts/airlinesAngularRoute/templates/airlineFleet.html",
        controller: "airlineFleetController"
    })
    .when("/airlineDestinations", {
        templateUrl: "../../scripts/airlinesAngularRoute/templates/airlineDestinations.html",
        controller: "airlineDestinationsController"
    })
    .when("/error", {
        templateUrl: "../../scripts/airlinesAngularRoute/templates/error.html",
        controller: "errorController"
    })
    .otherwise({
        redirectTo: "/error"
    });
}

routeSetup.$inject = ["$routeProvider"];