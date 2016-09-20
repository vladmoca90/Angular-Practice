var app = angular.module("studentApp", []);

app.controller("studentController", function ($scope) {

    $scope.studentsList = [
        { studentName: "Omer Cerahoglu", countryFlag: "", studentCountry: "Turkey", studentAge: "23", studentDegree: "Bsc Computer Science" },
        { studentName: "Tatiana Smirnova", countryFlag: "", studentCountry: "Russia", studentAge: "29", studentDegree: "Bsc International Relations" },
        { studentName: "Michael McDonald", countryFlag: "", studentCountry: "Canada", studentAge: "25", studentDegree: "Bsc Sport Sciences" },
        { studentName: "Clodine Gonzales", countryFlag: "", studentCountry: "Philippines", studentAge: "23", studentDegree: "Bsc Psychology" },
        { studentName: "Katrina van Bismarck", countryFlag: "", studentCountry: "Netherlands", studentAge: "20", studentDegree: "Bsc English Literature" },
        { studentName: "Alexandru Sima", countryFlag: "", studentCountry: "Romania", studentAge: "25", studentDegree: "Bsc Medicine" },
        { studentName: "Cai Hui", countryFlag: "", studentCountry: "China", studentAge: "22", studentDegree: "Bsc Geosciences" }
    ];

});