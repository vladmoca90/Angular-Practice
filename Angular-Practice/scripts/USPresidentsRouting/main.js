var app = angular.module("USPresidentsApp", ["ngRoute"]);

app.controller("mainController", mainController)
   .controller("BushController", BushController)
   .controller("ObamaController", ObamaController)
   .controller("ClintonController", ClintonController)
   .controller("RaeganController", RaeganController)
   .config(routeSetup);