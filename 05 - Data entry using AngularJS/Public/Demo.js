(function() {
    var mod = angular.module("booksApp", []);

    mod.controller("booksCtrl", function($scope) {

        $scope.isBookRequired = true;

        $scope.book = {
            title: "The Angular book",
            author: "Someone",
            year: 2014
        };

        $scope.save = function () {
            console.log($scope.form);
            alert("Saving the book with title: " + $scope.book.title);
        };
    });


}());