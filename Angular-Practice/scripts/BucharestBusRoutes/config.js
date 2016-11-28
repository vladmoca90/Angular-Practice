var app = angular.module("BucharestApp", ["ngRoute"]);

app.controller("mainController", mainController)
   .controller("bus104controller", bus104controller)
   .controller("bus131controller", bus131controller)
   .controller("bus205controller", bus205controller)
   .controller("bus301controller", bus301controller)
   .controller("bus336controller", bus336controller)
   .config(routeSetup);