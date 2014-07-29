(function () {
    var mod = angular.module("booksApp", ["ngRoute"]);


    mod.config(function ($routeProvider, $locationProvider) {
        $routeProvider.when("/books/list", {
            templateUrl: "/templates/list.html",
            controller: "booksListCtrl"
        });


        $routeProvider.when("/books/edit/:id", {
            templateUrl: "/templates/editor.html",
            controller: "booksEditCtrl",
            resolve: {
                book: function ($q, $route) {
                    var defer = $q.defer();
                    setTimeout(function () {
                        defer.resolve(
                        {
                            title: "Angular rocks " + $route.current.params.id
                    });

                    }, 5000);
                    return defer.promise;
                }
            }
        });

        $routeProvider.otherwise({
            redirectTo: "/books/list"
        });

        //$locationProvider.html5Mode(true);
    });

    mod.controller("booksListCtrl", function ($scope, $location) {
        $scope.books = [
            { title: "Angular rocks" },
            { title: "Rest is cool" },
            { title: "JavaScript rules" }
        ];

        $scope.edit = function () {
            $location.path("/books/edit/1");
        }
    });


    mod.controller("booksEditCtrl", function ($scope, book) {
        $scope.book = book;
    });

}());