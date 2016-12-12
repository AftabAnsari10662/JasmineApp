(function(){

    angular.module("jasmine-app")
           .controller("messageController", function($scope, messageService){

               $scope.message = messageService.getMessage();

           })
}())