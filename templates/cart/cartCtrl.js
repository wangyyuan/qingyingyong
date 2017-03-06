/**
 * Created by Administrator on 2017/2/10.
 */
angular.module("myapp")
    .controller("cartCtrl",function($scope,$ionicHistory,shopCart){
        $scope.goBack=function(){
            $ionicHistory.goBack()
        };
        $scope.cart = shopCart.findAll();
        // 求总金额
        $scope.money = function(){
            var total = 0;
            // 遍历统计
            angular.forEach($scope.cart,function(item){
                total += item.number * item.notes.price;   // 累加金额
                //console.log(item)
            });
            return total;
        };


        //点击"+" ，使数量增加
        $scope.countAdd=function(notes){
            shopCart.add(notes)
        };
        //点击"-"号 ,使数量减少
        $scope.countSub=function(notes){
            shopCart.sub(notes)
        };
        //点击删除键，让商品删除
        $scope.remove=function(num){
            shopCart.remove(num);
            console.log(num)
        };
        //全选
        $scope.checkAll=true;
        $scope.checkOne=true
        console.log($scope.cart.length)
        $scope.allCheckA=function(){
            if($scope.checkAll==false){
                for(var i=0; i<$scope.cart.length; i++){
                    $scope.checkOne=false;
                }
            }else{
                for(var i=0; i<$scope.cart.length; i++){
                    $scope.checkOne=true;
                }
            }
        };
        //判断全选当里面有一个不是选中时false和全部选中时true
        //$scope.ctrlNum=0;
        //$scope.$watch("cart",function(newValue){
        //    for(var i in newValue){
        //        if(newValue[i].product.check==true){
        //            $scope.ctrlNum++;
        //        };
        //    };
        //    if($scope.ctrlNum==$scope.cart.length){
        //        $scope.checkAll=true;
        //        $scope.ctrlNum=0;
        //    }else{
        //        $scope.checkAll=false;
        //        $scope.ctrlNum=0;
        //    }
        //},true);

    })