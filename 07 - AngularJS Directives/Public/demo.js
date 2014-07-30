(function () {
    var mod = angular.module("demoApp", []);


    mod.directive("dmDemo1", function ($http) {
        return {
            link: function (scope, element, attr) {
                console.log("Linking dmDemo1 on ", element, scope.$id);

                console.log(attr);

                element.bind("click", function () {
                    console.log("I was clicked");
                });
            }

        };

    });


    mod.directive("dmTemplate", function () {
        return {
            restrict: "EA",
            templateUrl: "/templates/dm-template.html",
            replace: true,
            transclude: true,
            link: function (scope, element) {
                element.bind("click", function () {
                    console.log("I was clicked");
                });
            }
        };

    });

    mod.controller("demoCtrl", function ($scope) {
        $scope.msg = "I created at " + new Date().toLocaleTimeString();
    });

    mod.directive("dmLinkedScope", function () {
        return {
            scope: {msg:"="},
            template: "The message is: {{msg}}",
            link: function (scope, element) {
                element.bind("click", function () {
                    scope.$apply(function () {
                        scope.msg = "I was clicked at " + new Date().toLocaleTimeString();
                    });
                });
            }
        };
    });
}());