var app = angular.module("studentApp", []);

app.controller("studentController", function ($scope) {

    $scope.borderedTable = "table table-bordered";

    $scope.studentsList = [
        {
            studentName: "Adnan Menderes",
            countryFlag: "../../images/studentTableAngular/turkey.png",
            studentCountry: "Turkey",
            studentAge: "24",
            studentDegree: "Bsc Computer Science with Business"
        },
        {
            studentName: "Michael McDonald",
            countryFlag: "../../images/studentTableAngular/canada.png",
            studentCountry: "Canada",
            studentAge: "25",
            studentDegree: "Bsc Sport Sciences"
        },
        {
            studentName: "Clodine Gonzales",
            countryFlag: "../../images/studentTableAngular/philippines.png",
            studentCountry: "Philippines",
            studentAge: "23",
            studentDegree: "Bsc Psychology"
        },
        {
            studentName: "Katrina van Bismarck",
            countryFlag: "../../images/studentTableAngular/netherlands.png",
            studentCountry: "Netherlands",
            studentAge: "20",
            studentDegree: "Bsc English Literature"
        },
        {
            studentName: "Alexandru Sima",
            countryFlag: "../../images/studentTableAngular/romania.png",
            studentCountry: "Romania",
            studentAge: "25",
            studentDegree: "Bsc Medicine"
        },
        {
            studentName: "Cai Hui",
            countryFlag: "../../images/studentTableAngular/china.png",
            studentCountry: "China",
            studentAge: "22",
            studentDegree: "Bsc Geosciences"
        },
        {
            studentName: "Tatiana Smirnova",
            countryFlag: "../../images/studentTableAngular/russia.png",
            studentCountry: "Russia",
            studentAge: "29",
            studentDegree: "Bsc International Relations with French"
        }
    ];

});