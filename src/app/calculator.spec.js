describe("calculator", function(){


    it("Should add 2 numbers", function(){

        function add(x,y){
            return x+y;
        }
        expect(add(2,2)).toBe(4);

    })

    it("Should substract 2 numbers", function(){

        function add(x,y){
            return x-y;
        }
        expect(add(2,2)).toBe(0);

    })

    it("Message service should return message", function(){


        var messageService = {};

        angular.mock.module(function($provide){
                $provide.factory("messageService",function(){

                    return{
                            getMessage:function(){
                                return "Hello Jasmine!";
                            }
                    }
                })
        })

        angular.mock.inject(function(_messageService_){

            messageService = _messageService_;

        })
        expect(messageService.getMessage()).toBe("Hello Jasmine!");

    })
})