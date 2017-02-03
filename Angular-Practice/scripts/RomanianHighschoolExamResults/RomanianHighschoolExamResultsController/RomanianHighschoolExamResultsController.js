function examResultsController($scope) {

    $scope.examsTable = "table table-bordered";

    $scope.results = [
        {
            name: "Vlad Mocanu",
            romanianSubject: "8.80",
            mathsSubject: "8.60",
            thirdSubjectName: "Biology",
            thirdSubjectResult: "9.80",
            status: "Pass"
        },
        {
            name: "Simionescu Horatiu",
            romanianSubject: "7.20",
            mathsSubject: "5.45",
            thirdSubjectName: "Physics",
            thirdSubjectResult: "6.95",
            status: "Pass"
        },
        {
            name: "Marinescu Leonard",
            romanianSubject: "8.95",
            mathsSubject: "3.90",
            thirdSubjectName: "Biology",
            thirdSubjectResult: "9.65",
            status: "Fail"
        },
        {
            name: "Alexandru Mocanu",
            romanianSubject: "8.10",
            mathsSubject: "8.70",
            thirdSubjectName: "Informatics",
            thirdSubjectResult: "9.75",
            status: "Pass"
        },
        {
            name: "Dumitru Costel",
            romanianSubject: "4.25",
            mathsSubject: "5.60",
            thirdSubjectName: "Biology",
            thirdSubjectResult: "5.95",
            status: "Fail"
        },
        {
            name: "Nedelcu Ruxandra",
            romanianSubject: "9.65",
            mathsSubject: "9.50",
            thirdSubjectName: "Chemistry",
            thirdSubjectResult: "10",
            status: "Pass"
        },
        {
            name: "Despa Francesca",
            romanianSubject: "9.80",
            mathsSubject: "9.15",
            thirdSubjectName: "Informatics",
            thirdSubjectResult: "9.90",
            status: "Pass"
        }
    ];

}