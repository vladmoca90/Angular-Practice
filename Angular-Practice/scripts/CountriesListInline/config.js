function routeSetup($routeProvider) {
    $routeProvider
    .when("/Germany", {
        templateUrl: "../../scripts/CountriesListInline/templates/Germany.html",
        controller: "GermanyController"
    })
    .when("/UK", {
        templateUrl: "../../scripts/CountriesListInline/templates/UK.html",
        controller: "UKController"
    })
    .when("/France", {
        templateUrl: "../../scripts/CountriesListInline/templates/France.html",
        controller: "FranceController"
    })
    .when("/Italy", {
        templateUrl: "../../scripts/CountriesListInline/templates/Italy.html",
        controller: "ItalyController"
    })
    .when("/Spain", {
        templateUrl: "../../scripts/CountriesListInline/templates/Spain.html",
        controller: "SpainController"
    })
    .when("/error", {
        templateUrl: "../../scripts/CountriesListInline/templates/error.html",
        controller: "errorController"
    })
    .otherwise({
        redirectTo: "/error"
    });
}

routeSetup.$inject = ["$routeProvider"];