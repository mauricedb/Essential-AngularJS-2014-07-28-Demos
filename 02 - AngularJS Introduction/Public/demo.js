(function () {
    'use strict';

    var myApp = angular.module("myApp", []);

    myApp.service("testSvc", function() {
        console.log("testSvc is created");
    });

    myApp.controller("DemoCtrl", function ($scope, $interval, testSvc) {

        $scope.model = {
            name: "Maurice"
        };


        $scope.people = [
            $scope.model,
            {
                name: "Jack"
            },
            {
                name: "Mike"
            }
        ];

        $scope.newPerson = {
            name: ""
        };

        $scope.addPerson = function () {
            $scope.people.push(angular.copy($scope.newPerson));
        }


        $interval(function () {
            $scope.now = new Date().toLocaleTimeString();
            //console.log($scope.now);
        }, 1000);

        //setInterval(function () {
        //$scope.$apply(function() {
        $scope.now = new Date().toLocaleTimeString();
        //console.log($scope.now);
        //});
        //}, 1000);


        $scope.$watch("model.name", function (newValue, oldValue) {
            console.log("model.name", newValue, oldValue);
        });

        $scope.$watch("now", function (newValue, oldValue) {
            console.log("now", newValue, oldValue);
        });

    });

}());
