var app = angular.module('app',['ngRoute']);

app.config(['$routeProvider',function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl:'./assets/tpl/index.html',
        controller:''
    })
    .when('./blog',{  
        templateUrl:'./assets/tpl/blog.html',
        controller:'blogController'
    })
    .when('./book',{
        templateUrl:'./assets/tpl/book.html',
        controller:'bookController'
    })
    .when('./about_me',{
        templateUrl:'./assets/tpl/about_me.html',
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