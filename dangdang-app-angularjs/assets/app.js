var app = angular.module('app',['ngRoute']);

app.config(['$routeProvider',function($routeProvider){
    $routeProvider
    .when('/',{
        template:'./tpl/index.html',
        controller:''
    })
    .when('./blog',{  
        template:'../tpl/blog.html',
        controller:'blogController'
    })
    .when('./book',{
        template:'./tpl/book.html',
        controller:'bookController'
    })
    .when('./about_me',{
        template:'./tpl/index.html',
        controller:''
    })
    .when('/book_list',{
        templateUrl:'./assets/tpl/book_list.html',
        controller:'booklistController'
    })
    .otherwise({
         redirectTo:'/'
    })

}])