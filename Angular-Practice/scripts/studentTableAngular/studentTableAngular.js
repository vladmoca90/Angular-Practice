var app = angular.module("studentApp", []);

app.controller("studentController", function ($scope) {

    $scope.studentsList = [
        { studentName: "Omer Cerahoglu", studentCountry: "Turkey", studentAge: "23", studentDegree: "Bsc Computer Science" },
        { studentName: "Omer Cerahoglu", studentCountry: "Turkey", studentAge: "23", studentDegree: "Bsc Computer Science" },
        { studentName: "Omer Cerahoglu", studentCountry: "Turkey", studentAge: "23", studentDegree: "Bsc Computer Science" },
        { studentName: "Omer Cerahoglu", studentCountry: "Turkey", studentAge: "23", studentDegree: "Bsc Computer Science" },
        { studentName: "Omer Cerahoglu", studentCountry: "Turkey", studentAge: "23", studentDegree: "Bsc Computer Science"}
    ];

});