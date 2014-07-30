describe("The unit", function () {

    it("should pass", function () {

        expect(false).not.toBe(true);
    });

})


describe("The controller", function () {
    var controller, scope;

    beforeEach(module("moviesApp"));

    beforeEach(inject(function ($controller) {
        scope = {};

        var moviesSvc = {
            query:function() {
                return [{}];
            }
        };

        controller = $controller("moviesCtrl", {
            $scope: scope,
            moviesSvc: moviesSvc
        });

    }));


    it("should be created", function() {
        expect(controller).toBeDefined();
    });

    it("should contain movies", function() {
        expect(scope.movies.length).toBe(1);
    })
})