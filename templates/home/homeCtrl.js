/**
 * Created by hxsd on 2017/1/19.
 */
angular.module("myapp")
    .controller("homeCtrl",function($scope,$ionicSideMenuDelegate){
        //  改变home里面看一看和说一说的class类
        $scope.kyk=true;
        $scope.$on("$stateChangeStart",function(event,toState){
            console.log(toState);
            if(toState.url=="/homeSpeak")
            {
                $scope.kyk=false;
                $scope.sys=true;
            }
            else {
                $scope.kyk=true;
                $scope.sys=false;
            }
        })

        //侧边栏
        $scope.toggleLeft = function() {
            $ionicSideMenuDelegate.toggleLeft();
        };
    })