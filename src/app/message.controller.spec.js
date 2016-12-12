describe("Message Controller", function () {

    beforeEach(module("jasmine-app"));

    var mockController;
    var $controller;
    var $httpBackend;
    var messageService;
    var $scope = {};
    var $rootScope;
    var authService;

    beforeEach(inject(function (_$controller_, _$rootScope_, _messageService_, _$httpBackend_, _authService_) {
        $controller = _$controller_;
        $rootScope = _$rootScope_;
        messageService = _messageService_;
        $httpBackend = _$httpBackend_;
        authService = _authService_;
    }))

    it("Getting Message", function () {

        var ctrl = $controller("messageController", { $scope: $scope });
        $rootScope.$apply();
        //expect(ctrl).toBeDefined();
        expect($scope.message).toBe("Hello Jasmine!");
    })
})