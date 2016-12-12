(function(){

angular.module("jasmine-app")
       .factory("authService", function(){

           
           var getAccessToken = function(){
               return "Hello Jasmine!";
           };

           return{
               getAccessToken:getAccessToken
           }
       })

}())