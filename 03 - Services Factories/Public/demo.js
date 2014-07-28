(function () {
    'use strict';

    var app = angular.module("theApp", []);


    app.service("promisse", function ($timeout, $q) {

        this.doStuff = function () {
            var defer = $q.defer();

            $timeout(function () {
                defer.resolve("Done");

            }, 5000);

            return defer.promise;
        };

    });


    app.factory("theFact", function () {
        console.log("theFact");
        //return {
        //    name: "theFact",
        //    fn: function () {
        //        console.log("per instance");
        //        return {};
        //    }
        //};

            return function () {
                console.log("per instance");
                return {};
            }

    });


    app.controller("TheCtrl", function ($scope, promisse, theFact) {

        var o = theFact();
        $scope.result = "doing stuff";

        promisse.doStuff().then(function (msg) {
            $scope.result = msg;

        });


    });

    app.controller("TheCtrl2", function ($scope, theFact) {
        var o = theFact();



    });

}());
