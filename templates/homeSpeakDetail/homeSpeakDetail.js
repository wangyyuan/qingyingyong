/**
 * Created by hxsd on 2017/1/20.
 */
angular.module("myapp")
    .controller("homeSpeakDetailCtrl",function($scope,$stateParams,$ionicHistory){
        //返回上一级
        $scope.goBack=function(){
            $ionicHistory.goBack()
        };
        //  图片的数据
        $scope.pic = [
            {num:"1",imgsrc:"images/m_04.jpg"},
            {num:"2",imgsrc:"images/m_05.jpg"},
            {num:"3",imgsrc:"images/img_03.jpg"}
        ]
        $scope.pics= {};
        angular.forEach($scope.pic,function(pics){
            if(pics.num == $stateParams.title){
                $scope.pics = pics;
                console.log("#" + pics.num);
                return;
            }
            //console.log($stateParams.title)
        });

    })