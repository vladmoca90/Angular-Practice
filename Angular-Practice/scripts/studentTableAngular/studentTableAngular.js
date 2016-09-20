var app = angular.module("studentApp", []);

app.controller("studentController", function ($scope) {

    $scope.studentsList = [
        { studentName: "Omer Cerahoglu", studentCountry: "Turkey", studentAge: "23", studentDegree: "Bsc Computer Science" },
        { studentName: "Tatiana Smirnova", studentCountry: "Russia", studentAge: "29", studentDegree: "Bsc International Relations" },
        { studentName: "Michael McDonald", studentCountry: "Canada", studentAge: "25", studentDegree: "Bsc Sport Sciences" },
        { studentName: "Clodine Gonzales", studentCountry: "Philippines", studentAge: "23", studentDegree: "Bsc Psychology" },
        { studentName: "Katrina van Bismarck", studentCountry: "Netherlands", studentAge: "20", studentDegree: "Bsc English Literature" },
        { studentName: "Alexandru Sima", studentCountry: "Romania", studentAge: "25", studentDegree: "Bsc Medicine" },
        { studentName: "Cai Hui", studentCountry: "China", studentAge: "22", studentDegree: "Bsc Geosciences" }

    ];

});