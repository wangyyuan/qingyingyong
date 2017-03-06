/**
 * Created by hxsd on 2017/1/19.
 */
angular.module("myapp")
    .controller("findCtrl",function($scope){
        $scope.find=[
            {"imgsrc1":"images/img_03.jpg"},
            {"imgsrc2":"images/img_06.jpg"},
            {"imgsrc3":"images/img_07.jpg"},
            {"imgsrc4":"images/img_08.jpg"},
            {"hot":[
                {"hot_ti":"热门话题"},
                {"more":"更多"},
                {"huati":[
                    {"title":"# 每日穿搭","sTitle":"1081 人参加","imgsrc":"images/img_01.jpg"},
                    {"title":"# 最难买的唇膏色号","sTitle":"429 人参加","imgsrc":"images/img_02.jpg"},
                    {"title":"# 高颜值厨具","sTitle":"41 人参加","imgsrc":"images/img_03.jpg"}
                ]}
            ]},
            {"note":[
                {"hot_ti":"热门长笔记"},
                {"more":"更多"},
                {"huati":[
                    {"title":"Givenchy compact face powder 83 Peach 蜜桃色","sTitle":"翻译过来大概就是便携式散粉啦 小盒子精致的不行不行 额外一层是镜子一层是刷子 在多伦多逛的时候入的 买来就是图出去玩便携好带[害羞][害羞][害羞] 试用了下发现显色效果还成 但是小刷子是真心不好用[好冷][好冷][好冷] 感觉抓色力不行然后硬的和牙刷也差不多了… 应该是不会再回购啦","imgsrc":"images/h.jpg"},
                    {"title":"hotel chocolat巧克力 酒心巧克力 * bourbon奶油味曲奇","sTitle":"它家的的包装完全可以满足外貌协会的要求，简洁有高贵，十分喜欢！（我拍的的这盒，包装一般般的.）它的巧克力每个都做的很精致漂亮，好喜欢.它家的酒心巧克力真的好棒，一口一个满足呀～ Tokyo banana香蕉夹心蛋糕//这个应该好多人都被安利过吧😬但真的！确实很好吃！！！柔软的蛋糕外皮，包裹着带有浓郁奶油味的香蕉内馅，每一口都挑逗味蕾呢（≧∇≦）冻过之后更美味哟* bourbon奶油味曲奇//现在这个曲奇饼干在国内很多超市都有卖啦！曲奇很香，不会很干，苏苏的，上边的奶油味特别好！好像出了三个口味呢！好想都去试试～ dasses夹心饼干//身边很多人都觉得它没有白色恋人好吃，但我觉得两者的味道其实没有差很多，都觉得很好吃.这个也是在国内很多超市都有卖啦！这个好像也是出了三个味白巧克力、黑巧克力、抹茶.我最喜欢抹茶味的啦！（抹茶控） 对巧克力情有独钟的爱！","imgsrc":"images/f_01.jpg"},
                    {"title":"粤菜馆Hakkasan 鱼子酱片皮鸭 鹅肝炒牛肉","sTitle":"前一阵子借着父上过生日的由头，拔草了粤菜馆Hakkasan。听说是个英国厨师开的日文名字的中餐馆，其实偏西餐改良，听说也是米其林背景？ 招牌的鱼子酱片皮鸭非常美味，略略有点油但总体味道均衡。点心很是豪华，鹅肝炒牛肉的口感搭配很奇妙，最要点的是美味的椰子甜点！","imgsrc":"images/f_02.jpg"},
                ]}
            ]}

        ]
    })