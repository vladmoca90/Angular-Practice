var app = angular.module("countriesApp", ["ngRoute"]);

app.controller("mainController", mainController)
   .controller("GermanyController", GermanyController)
   .controller("FranceController", FranceController)
   .controller("UKController", UKController)
   .controller("SpainController", SpainController)
   .controller("ItalyController", ItalyController)
   .controller("errorController", errorController)
   .config(routeSetup);