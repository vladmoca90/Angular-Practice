function routeSetup($routeProvider) {
    $routeProvider
    .when("/Bush", {
        templateUrl: "../../scripts/USPresidentsRouting/templates/Bush.html",
        controller: "BushController"
    })
    .when("/Clinton", {
        templateUrl: "../../scripts/USPresidentsRouting/templates/Clinton.html",
        controller: "ClintonController"
    })
    .when("/Obama", {
        templateUrl: "../../scripts/USPresidentsRouting/templates/Obama.html",
        controller: "ObamaController"
    })
    .when("/Raegan", {
        templateUrl: "../../scripts/USPresidentsRouting/templates/Raegan.html",
        controller: "RaeganController"
    })
    .when("/error", {
        templateUrl: "../../scripts/BucharestBusRoutes/templates/error.html",
        controller: "errorController"
    })
    .otherwise({
        redirectTo: "/error"
    });
}

routeSetup.$inject = ["$routeProvider"];