/**
 * Created by Administrator on 2017/2/8.
 */
angular.module("myapp")
    .controller("homeSeeDetailCtrl",function($scope,$stateParams,$ionicHistory,shopCart){
        //返回上一级
        $scope.goBack=function(){
            $ionicHistory.goBack()
        };
        //  图片的数据
        $scope.note=[
            {num:"1",title:"情人表白优选好礼",cart:"Laderach手工夹心巧克力",content:"情人表白优选好礼 · 手工夹心巧克力 ",price:"218",OldPrice:"278",country:"瑞士",brand:"Laderach",imgsrc:"images/pic_01.jpg",imgsrc01:"images/pic_02.jpg",imgsrc02:"images/pic_03.jpg",chose:"已选:原味20粒",desc:"去瑞士旅游一定会对遍布大街小巷的Laderach Store印象深刻，作为当地知名的大牌巧克力，全球拥有超过200家精品门店。12颗装M款巧克力在外形上如缤纷的雪花与星空下的屋顶组合，颜值极高。满满一盒巧克力包含12种不同形状与榛子果仁、椰蓉、牛奶、芝麻等多种口味。作为春节礼物送给爱人、家人、朋友闺蜜都是非常不错的选择。"},
            {num:"2",title:"温和清洁不干皮",cart:"日本Ipsa粘土深层清洁面膜",content:"温和清洁不干皮 · 粘土深层清洁面膜  ",price:"297",OldPrice:"350",country:"日本",brand:"Ipsa",imgsrc:"images/pic_1.jpg",imgsrc01:"images/pic_2.jpg",imgsrc02:"images/pic_1.jpg",chose:"已选:100g",desc:"去瑞士旅游一定会对遍布大街小巷的Laderach Store印象深刻，作为当地知名的大牌巧克力，全球拥有超过200家精品门店。12颗装M款巧克力在外形上如缤纷的雪花与星空下的屋顶组合，颜值极高。满满一盒巧克力包含12种不同形状与榛子果仁、椰蓉、牛奶、芝麻等多种口味。作为春节礼物送给爱人、家人、朋友闺蜜都是非常不错的选择。"},
            {num:"3",title:"保湿美白一起来",cart:"日本HABA鲨烷VC美白油",content:"保湿美白一起来 · 鲨烷VC美白油  ",price:"128",OldPrice:"248",country:"日本",brand:"HABA",imgsrc:"images/pic.jpg",imgsrc01:"images/pic01.jpg",imgsrc02:"images/pic02.jpg",chose:"已选:15ml",desc:"Haba角鲨烷油系列可不止基础款一种，VC美白油成分简单，角鲨烷油加vc，效果就是修复角质层同时美白提亮肤色，温和又有效。“比起透明瓶的鲨烷油，美白款更清爽，非常适合夏天！把它滴入乳液也很滋润！”“滴两滴在掌心，利用掌心温热的温度轻轻按压在自己的脸部，搭配一个补水精华那效果真是没sei了！”“除了滴出来是油之外，上脸一点都没有油的感觉，吸收得很快，也不黏反而用后很滑呀！”“滴两滴在粉底液里滴两滴油上妆效果会好很多，妆会很服帖，妆感也比较透亮。”坐标云南的小红薯“一个夏天完全没晒黑，暑假回家家里人还都说我变白了”！小小一瓶但是用量超级省，撑好几个月没问题！"},
            {num:"4",title:"把痘痘扼杀在摇篮",cart:"易科美 YDUNVIE三重光电家用激",content:"把痘痘扼杀在摇篮 · 三重光电家用激 ",price:"1288",OldPrice:"1988",country:"丹麦",brand:"易科美 YDUNVIE",imgsrc:"images/a_01.jpg",imgsrc01:"images/a_02.jpg",imgsrc02:"images/a_03.jpg",chose:"已选:冰川银",desc:"一顿麻辣火锅或是晚睡1小时都会导致讨厌的痘痘突然到访，无法尽兴吃吃喝喝的人生是暗淡的，不过好在有它，易科美祛痘仪源自丹麦的三重光电专利技术，红外激光深入真皮层杀灭杀菌、蓝光消灭皮肤表层细菌、电脉冲打开堵塞毛孔促进细胞再生。小红薯说“我连续用了两次，当时没啥效果，第二天惊喜的发现新生痘变瘪了”，“用完以后痘痘会很快下去，现在我的脸非常干净”。易科美豪华版祛痘仪扩散角更小，光束更聚集，更有配套充电底座相赠，随手一放即可充电。 小贴士：孕妇或哺乳期妇女，未满13周岁的人群，请勿使用本仪器。"},
            {num:"5",title:"100%无添加的甜蜜",cart:"甜牙齿牛奶硬糖",content:"100%无添加的甜蜜 · 牛奶硬糖 海 ",price:"87",OldPrice:"99",country:"中国",brand:"甜牙齿",imgsrc:"images/b_01.jpg",imgsrc01:"images/b_02.jpg",imgsrc02:"images/b_03.jpg",chose:"已选:3盒",desc:"甜牙齿崇尚健康自然的生活法则，坚持选用安心健康的进口食材，不添加任何人工色素与化学成分。焦糖海盐口味加入了意大利进口海盐，甜而不腻，咸咸甜甜的味道让人欲罢不能。经典原味以新西兰牛奶、新西兰鲜奶油以及日本进口水饴长时间不间断搅拌煮制而成，浓浓的奶香味，咬起来脆脆的。苦乐咖啡选用日本进口新鲜中度烘焙咖啡，咖啡的苦与香气让人回味无穷。咖啡的焦香融合新西兰牛奶的浓醇，苦甜平衡。"},
            {num:"6",title:"100%新年特惠套装",cart:"JOSEPH&STACEY流苏牛皮单肩手拎两用",content:"新年特惠套装 · 流苏牛皮单肩手拎两 ",price:"1700",OldPrice:"1770",country:"韩国",brand:"JOSEPH&STACEY",imgsrc:"images/c_01.jpg",imgsrc01:"images/c_02.jpg",imgsrc02:"images/c_03.jpg",chose:"已选:酒红",desc:"韩国皮具品牌JOSEPH&STACEY整体设计偏英式风格，以剪刀logo、搭扣或流苏为主元素，既有低调的通勤款，也会推出色彩出挑的单品。所有包包都是在韩国纯手工制作，对原材料选取和细节处理非常严格。少女时代、朴宝英都是它家粉丝哦~迷你流苏，可爱时尚，可拆卸手拎带，百分百牛皮材质，耐磨耐脏，大容量，持久耐用。配什么衣服都适合，通勤约会两相宜。 零钱包由百分之百牛皮制成，耐磨耐用，去家附近买东西，单拿这个包包即可，或者放在包包里装零碎的小东西或者零钱、卡都很合适哦！"}
        ]
        $scope.notes= {};
        angular.forEach($scope.note,function(notes){
            if(notes.num == $stateParams.title){
                $scope.notes = notes;
                console.log(notes.price);
                return;
            }
            //console.log($stateParams.title)
            //console.log(notes)
        });
        //点击添加到购物车时，响应
        $scope.add = function(notes){
            shopCart.add(notes);
            console.log(notes)
        };
    })