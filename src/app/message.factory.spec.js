describe("Message service", function () {

    var messageService = {};
    var authService;
    var anotherService;
    var $httpBackend;
    beforeEach(module("jasmine-app"));

    beforeEach(inject(function (_messageService_, _authService_, _anotherService_, _$httpBackend_) {
        messageService = _messageService_;
        authService = _authService_;
        anotherService = _anotherService_;
        $httpBackend = _$httpBackend_;
    }))

    it("should return message", function () {

        expect(messageService.getMessage()).toBe("Hello Jasmine!");

    })

    it("Return Token", function () {
        expect(authService.getAccessToken()).toBe("Hello Jasmine!");
    })

    it("Return the name", function () {
        expect(anotherService.name);
        var username = ''

        $httpBackend.when("GET", "https://api.github.com/users/aftab10662")
            .respond(200, { name: 'Aftab Ansari' })

        anotherService.getGitHubUserName()
            .then(function (data) {
                username = data.name;
            })
        $httpBackend.flush();
        expect(username).toBe('Aftab Ansari');
    })
})