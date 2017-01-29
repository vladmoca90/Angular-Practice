function pizzasController($scope) {

    $scope.pizzas = [
        {
            name: "Margherita",
            smallPrice: 5,
            largePrice: 6.40,
            count: 0
        },
        {
            name: "Vegetarian",
            smallPrice: 5.30,
            largePrice: 7.30,
            count: 0
        },
        {
            name: "Hot Vegetarian",
            smallPrice: 5.70,
            largePrice: 7.80,
            count: 0
        },
        {
            name: "Hawaiian",
            smallPrice: 5.60,
            largePrice: 7.30,
            count: 0
        },
        {
            name: "Chicken Tikka",
            smallPrice: 5.50,
            largePrice: 7.30,
            count: 0
        }
    ];

    $scope.decrease = function (pizza) {
        if (pizza.count == 0) {
            return;
        }
        pizza.count--;

        $scope.pizza

        // remove pizza from basket or decrease count if more than 1
    }

    $scope.increase = function (pizza) {
        pizza.count++;

        // addpizza to basket, but first check if it's already there
    }

}

pizzasController.$inject = ["$scope"];