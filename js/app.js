/**
 * Created by hxsd on 2017/1/19.
 */
angular.module("myapp", ["ionic","ngWaterfall","ui.router"]);

angular.module("myapp")
//隐藏二级目录下的tabs
    .directive('hideTabs', function($rootScope) {
        return {
            restrict: 'A',
            link: function(scope, element, attributes) {
                scope.$on('$ionicView.beforeEnter', function() {
                    scope.$watch(attributes.hideTabs, function(value){
                        $rootScope.hideTabs = value;
                    });
                });
                scope.$on('$ionicView.beforeLeave', function() {
                    $rootScope.hideTabs = false;
                });
            }
        };
    })
// 配置路由
    .config(function($stateProvider, $urlRouterProvider){
        $stateProvider
            .state("tabs",{
                url:"/tabs",
                abstract:true,
                templateUrl:"templates/tabs/tabs.html",
                controller:"tabsCtrl"
            })
            .state("tabs.home",{
                url:"/home",
                abstract:true,
                views:{"tab-home":{
                    templateUrl:"templates/home/home.html",
                    controller:"homeCtrl"
                }}
            })
            .state("tabs.cart",{
                url:"/cart",
                views:{"tab-home":{
                    templateUrl:"templates/cart/cart.html",
                    controller:"cartCtrl"
                }}
            })
            .state("tabs.home.homeSee",{
                url:"/homeSee",
                views:{"tab-home-see":{
                    templateUrl:"templates/homeSee/homeSee.html",
                    controller:"homeSeeCtrl"
                }}
            })
            .state("tabs.homeSeeDetail",{
                url:"/homeSeeDetail?title",
                views:{"tab-home":{
                    templateUrl:"templates/homeSeeDetail/homeSeeDetail.html",
                    controller:"homeSeeDetailCtrl"
                }}
            })
            .state("tabs.home.homeSpeak",{
                url:"/homeSpeak",
                views:{"tab-home-see":{
                    templateUrl:"templates/homeSpeak/homeSpeak.html",
                    controller:"homeSpeakCtrl"
                }}
            })
            .state("tabs.homeSpeakDetail",{
                url:"/homeSpeakDetail?title",
                views:{"tab-home":{
                    templateUrl:"templates/homeSpeakDetail/homeSpeakDetail.html",
                    controller:"homeSpeakDetailCtrl"
                }}
            })
            .state("tabs.find",{
                url:"/find",
                views:{"tab-find":{
                    templateUrl:"templates/find/find.html",
                    controller:"findCtrl"
                }}
            })
            .state("tabs.buy",{
                url:"/buy",
                views:{"tab-buy":{
                    templateUrl:"templates/buy/buy.html"
                }}
            })
            .state("tabs.message",{
                url:"/message",
                views:{"tab-message":{
                    templateUrl:"templates/message/message.html"
                }}
            })
            .state("tabs.user",{
                url:"/user",
                views:{"tab-user":{
                    templateUrl:"templates/user/user.html"
                }}
            })
        $urlRouterProvider.otherwise("/tabs/home/homeSee")

    })