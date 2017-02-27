function formController($scope) {

    $scope.groupsOfFormsItems = "form-group";

    $scope.formControlClass = "form-control";

    $scope.user = {
        firstName: "John Alexander",
        lastName: "Thompson",
        myEmail: "johnThompson2@gmail.com",
        myPassword: "aBc123ABc2000",
        myTelephone: "07673307272",
        myURL: "http://JohnThomp83.blogspot.co.uk",
        descriptionSection: "Hello, my name is John Alexander Thompson and I am 33 years old. I am an American-Canadian citizen that currently lives in Belfast, Northern Ireland and is looking for a job as a web developer. I speak French and Spanish at a professional level and German at an intermediate one."
    };

    $scope.regions = [
        {
            Id: 1,
            Name: "European Union",
            Selected: false
        }, {
            Id: 2,
            Name: "UK/Ireland",
            Selected: true
        }, {
            Id: 3,
            Name: "United States",
            Selected: false
        }, {
            Id: 4,
            Name: "Canada",
            Selected: false
        }, {
            Id: 5,
            Name: "Australia/New Zealand",
            Selected: false
        }, {
            Id: 6,
            Name: "South Africa",
            Selected: false
        }, {
            Id: 7,
            Name: "Hong Kong",
            Selected: false
        },
       {
           Id: 8,
           Name: "Japan/South Korea/China/Taiwan",
           Selected: false
       },
       {
           Id: 9,
           Name: "Commonwealth of Independent Nations",
           Selected: false
       }
    ];

}