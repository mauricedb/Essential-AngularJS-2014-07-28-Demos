(function() {
    var mod = angular.module("booksApp", ["ngResource"]);

    //mod.factory("booksSvc", function($http) {
    //    return {
    //        query: function() {
    //            return $http.get("/api/books");
    //        }
    //    };
    //});


    //mod.controller("booksCtrl", function($scope, booksSvc) {

    //    booksSvc.query().then(function(result) {
    //        $scope.books = result.data;
    //    }, function() {
    //        console.log("Oops");

    //    });
    //});


    mod.factory("Book", function($resource) {

        return $resource("/api/books");

    });


    mod.controller("booksCtrl", function ($scope, Book) {
        $scope.books = Book.query();
        console.log($scope.books.length);

        $scope.books.$promise.then(function() {
            console.log($scope.books.length);
        }, function(err) {
            console.log(err);
        })
    });
}())