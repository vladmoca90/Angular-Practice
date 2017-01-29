function pizzasController($scope) {

    $scope.pizzas = [
        {
            count: 0
        },
        {
            count: 0
        },
        {
            count: 0
        }
    ];

    $scope.decrease = function (pizza) {
        if (pizza.count == 0) {
            return;
        }
        pizza.count--;

        // remove pizza from basket or decrease count if more than 1
    }

    $scope.increase = function (pizza) {
        pizza.count++;

        // addpizza to basket, but first check if it's already there
    }

    $scope.basket = {
        items: [],
        price: 0
    }
}

pizzasController.$inject = ["$scope"];