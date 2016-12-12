(function () {


    angular.module("jasmine-app")
        .factory("messageService", function (authService, anotherService) {


            var getMessage = function () {

                return authService.getAccessToken();
            }

            getName = function () {
                return anotherService.name;
            }
            return {

                getMessage: getMessage,
                getName: getName
            }
        })


} ())