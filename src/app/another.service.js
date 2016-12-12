(function () {

    angular.module("jasmine-app")
        .service("anotherService", function ($http) {
            var self = this;
            self.name = "Aftab Ansari";

            self.getGitHubUserName = function () {
                return $http.get("https://api.github.com/users/aftab10662")
                    .then(function (response) {
                        return response.data;
                    })
            }
        })
} ())