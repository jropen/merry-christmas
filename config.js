// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "小林同学",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "Merry Christmas",  // 同上...
        "不知不觉",
        "我们在一起",
        "已经489天了",
        "这是一份年度报告",
        "请查收",
        "我们去了10个城市",
        "长沙、顺德、南京、澳门、香港",
        "深圳、贵阳、四川、北京、南宁",
        "听了10场现场和音乐节",
        "万青、德卡斯、瓦伊纳&生祥、声音玩具",
        "星巢、泡泡、云游音乐节",
        "跨年、乐夏、新裤子演唱会",
        "看了很多很多次日落",
        "把广州的公园都要逛完了",
        "我们还会一起",
        "看遍山河风景",
        "今天不是周年纪念日",
        "不是生日不是跨年",
        "但我就是想告诉你",
        "我喜欢你",
        "喜欢和你用相机记录风景",
        "喜欢和你一起在家里做饭",
        "喜欢和你逛商场散步公园",
        "我还想",
        "想你和一起看日出",
        "一起看星光看风雪",
        "想和你去海边捡贝壳玩泥沙",
        "想把这辈子",
        "最单纯的喜欢",
        "和数不尽的温柔",
        "都给你",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        // "小林同学",
        // "Merry Christmas",
        "不知不觉": "imgs/头像.jpeg",
        "我们在一起": "imgs/偷拍背影.jpeg",
        "已经489天了": "imgs/第一次送花.jpeg",
        "这是一份年度报告": "imgs/我俩.jpeg",
        "请查收": "imgs/北京2.jpeg",
        "我们去了10个城市": "imgs/澳门.jpeg",
        "长沙、顺德、南京、澳门、香港": "imgs/南京.jpeg",
        "深圳、贵阳、四川、北京、南宁": "imgs/贵州.jpeg",
        "听了10场现场和音乐节": "imgs/万青.jpeg",
        "万青、德卡斯、瓦伊纳&生祥、声音玩具": "imgs/deca.jpeg",
        "星巢、泡泡、云游音乐节": "imgs/云游.jpeg",
        "跨年、乐夏、新裤子演唱会": "imgs/跨年演唱会.jpeg",
        "看了很多很多次日落": "imgs/草地.jpeg",
        "把广州的公园都要逛完了": "imgs/流心湖公园.jpeg",
        "我们还会一起": "imgs/香港.jpeg",
        "看遍山河风景": "imgs/川西2.jpeg",
        "今天不是周年纪念日": "imgs/长沙.jpeg",
        "不是生日不是跨年": "imgs/生祥.jpeg",
        "但我就是想告诉你": "imgs/声音玩具.jpeg",
        "我喜欢你": "imgs/云游2.jpeg",
        "喜欢和你用相机记录风景": "imgs/川西.jpeg",
        "喜欢和你一起在家里做饭": "imgs/奶茶.jpeg",
        "喜欢和你逛商场散步公园": "imgs/公园2.jpeg",
        "我还想": "imgs/华农.jpeg",
        "想你和一起看日出": "imgs/日出.jpeg",
        "一起看星光看风雪": "imgs/飞机.jpeg",
        "想和你去海边捡贝壳玩泥沙": "imgs/乐夏.jpeg",
        "想把这辈子": "imgs/乐夏2.jpeg",
        "最单纯的喜欢": "imgs/我俩2.jpeg",
        "和数不尽的温柔": "imgs/我俩3.jpeg",
        "都给你": "imgs/第一次送花.jpeg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "开始",
        play: "音乐",
        bannar_coming: "圣诞快乐",
        balloons_flying: "好像少点东西",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "圣诞快乐",
        story: "致我的宝贝",
    }
};
