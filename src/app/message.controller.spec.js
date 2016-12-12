describe("Message Controller", function () {

    beforeEach(module("jasmine-app"));

    var mockController;
    var $controller;
    var messageService;
    var $scope = {};
    var $rootScope;
    beforeEach(inject(function (_$controller_, _$rootScope_, _messageService_) {
        $controller = _$controller_;
        $rootScope = _$rootScope_;
        messageService = _messageService_;
    }))

    it("Getting Message", function () {

        var ctrl = $controller("messageController", { $scope: $scope });
        expect(ctrl).toBeDefined();
        expect(ctrl).toBe("NNN");
    })
})