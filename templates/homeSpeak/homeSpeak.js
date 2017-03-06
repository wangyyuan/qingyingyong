/**
 * Created by hxsd on 2017/1/20.
 */
angular.module("myapp")
    .controller("homeSpeakCtrl",function($scope){
        //  图片的数据
        $scope.pic = [
            {num:"1",imgsrc:"images/m_04.jpg"},
            {num:"2",imgsrc:"images/m_05.jpg"},
            {num:"3",imgsrc:"images/img_03.jpg"}
        ]

    })