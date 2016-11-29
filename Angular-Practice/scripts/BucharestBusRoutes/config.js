
function routeSetup($routeProvider) {
    $routeProvider
    .when("/bus104", {
        templateUrl: "../../scripts/airlinesAngularRoute/templates/bus104.html",
        controller: "bus104Controller"
    })
    .when("/bus131", {
        templateUrl: "../../scripts/airlinesAngularRoute/templates/bus131.html",
        controller: "bus131Controller"
    })
    .when("/bus205", {
        templateUrl: "../../scripts/airlinesAngularRoute/templates/bus205.html",
        controller: "bus205Controller"
    })
    .when("/bus301", {
        templateUrl: "../../scripts/airlinesAngularRoute/templates/bus301.html",
        controller: "bus301Controller"
    })
    .when("/bus336", {
        templateUrl: "../../scripts/airlinesAngularRoute/templates/bus336.html",
        controller: "bus336Controller"
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