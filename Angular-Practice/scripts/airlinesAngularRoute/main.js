var app = angular.module("myApp", ["ngRoute"]);

app.controller("mainController", mainController)
   .controller("airlineNameController", airlineNameController)
   .controller("airlineCountryController", airlineCountryController)
   .controller("airlineFleetController", airlineFleetController)
   .controller("airlineDestinationsController", airlineDestinationsController)
   .controller("errorController", errorController)
   .config(routeSetup);