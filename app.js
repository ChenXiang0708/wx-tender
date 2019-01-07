var bmap = require('./libs/bmap-wx.min.js');
App({
  data: {
    ak: "wk3IcOm5hgBNboF5GrptZaNKMlgLruc6", //填写申请到的ak  
    longitude: '', //经度  
    latitude: '', //纬度  
    scenicInfo: [{
        indexImg: "http://www.elvluo.com/applet/demo/image/all/玄武湖.png",
        detail: "http://www.elvluo.com/applet/demo/image/detail/玄武湖.jpg",
        name: "玄武湖", //玄武湖
        url: "xwh", //玄武湖
        latitude: 32.0785364450,
        longitude: 118.8052715024
      },
      {
        indexImg: "http://www.elvluo.com/applet/demo/image/all/中华门.png",
        detail: "http://www.elvluo.com/applet/demo/image/detail/中华门.jpg",
        name: "中华门", //中华门
        url: "zhm", //中华门
        latitude: 32.0167160896,
        longitude: 118.7860183260
      },

      {
        indexImg: "http://www.elvluo.com/applet/demo/image/all/1912街区.png",
        detail: "http://www.elvluo.com/applet/demo/image/detail/1912街区.jpg",
        name: "1912街区",
        url: "1912jq",
        latitude: 32.0514771690,
        longitude: 118.8022895988
      },
      {
        indexImg: "http://www.elvluo.com/applet/demo/image/all/中山陵.png",
        detail: "http://www.elvluo.com/applet/demo/image/detail/中山陵.jpg",
        name: "中山陵",
        url: "zsl",
        latitude: 32.0710053726,
        longitude: 118.8577314866
      },
      {
        indexImg: "http://www.elvluo.com/applet/demo/image/all/世凹桃源.png",
        detail: "http://www.elvluo.com/applet/demo/image/detail/世凹桃源.jpg",
        name: "世凹桃源",
        url: "saty",
        latitude: 31.9163969862,
        longitude: 118.7366618026
      },
      {
        indexImg: "http://www.elvluo.com/applet/demo/image/all/中国科举博物馆.png",
        detail: "http://www.elvluo.com/applet/demo/image/detail/中国科举博物馆.jpg",
        name: "中国科举博物馆",
        url: "zgkjbwg",
        latitude: 32.0274445552,
        longitude: 118.7972068209
      },
      {
        indexImg: "http://www.elvluo.com/applet/demo/image/all/中国第二历史档案馆.png",
        detail: "http://www.elvluo.com/applet/demo/image/detail/中国第二历史档案馆.jpg",
        name: "中国第二历史档案馆",
        url: "zgdelsdag",
        latitude: 32.0463120683,
        longitude: 118.8202918411
      },
      {
        indexImg: "http://www.elvluo.com/applet/demo/image/all/中央饭店.png",
        detail: "http://www.elvluo.com/applet/demo/image/detail/中央饭店.jpg",
        name: "中央饭店",
        url: "zyfd",
        latitude: 32.0476443216,
        longitude: 118.8041278196
      },
      {
        indexImg: "http://www.elvluo.com/applet/demo/image/all/中山码头.png",
        detail: "http://www.elvluo.com/applet/demo/image/detail/中山码头.jpg",
        name: "中山码头",
        url: "zsmt",
        latitude: 32.0935883212,
        longitude: 118.7399401432
      },
      {
        indexImg: "http://www.elvluo.com/applet/demo/image/all/中山陵音乐台.png",
        detail: "http://www.elvluo.com/applet/demo/image/detail/中山陵音乐台.jpg",
        name: "中山陵音乐台",
        url: "zslyyt",
        latitude: 32.0613141816,
        longitude: 118.8616898573
      },
      {
        indexImg: "http://www.elvluo.com/applet/demo/image/all/仪凤门.png",
        detail: "http://www.elvluo.com/applet/demo/image/detail/仪凤门.jpg",
        name: "仪凤门",
        url: "yfm",
        latitude: 32.0972219109,
        longitude: 118.7540243056
      },
      {
        indexImg: "http://www.elvluo.com/applet/demo/image/all/侵华日军南京大屠杀遇难同胞纪念馆.png",
        detail: "http://www.elvluo.com/applet/demo/image/detail/侵华日军南京大屠杀遇难同胞纪念馆.jpg",
        name: "侵华日军南京大屠杀遇难同胞纪念馆",
        url: "qhrjnjdtsyntbjng",
        latitude: 32.0412036072,
        longitude: 118.7499672706
      },
      {
        indexImg: "http://www.elvluo.com/applet/demo/image/all/午朝门公园.png",
        detail: "http://www.elvluo.com/applet/demo/image/detail/午朝门公园.jpg",
        name: "午朝门公园",
        url: "wcmgy",
        latitude: 32.0442378079,
        longitude: 118.8241159819
      },
      {
        indexImg: "http://www.elvluo.com/applet/demo/image/all/南京博物馆.png",
        detail: "http://www.elvluo.com/applet/demo/image/detail/南京博物馆.jpg",
        name: "南京博物馆",
        url: "njbwg",
        latitude: 32.0468780989,
        longitude: 118.8315973038
      },
      {
        indexImg: "http://www.elvluo.com/applet/demo/image/all/南京地质博物馆.png",
        detail: "http://www.elvluo.com/applet/demo/image/detail/南京地质博物馆.jpg",
        name: "南京地质博物馆",
        url: "njdzbwg",
        latitude: 32.0610132383,
        longitude: 118.7859882059
      },
      {
        indexImg: "http://www.elvluo.com/applet/demo/image/all/南京大学.png",
        detail: "http://www.elvluo.com/applet/demo/image/detail/南京大学.jpg",
        name: "南京大学",
        url: "njdx",
        latitude: 32.1254210000,
        longitude: 118.9648910000
      },
      {
        indexImg: "http://www.elvluo.com/applet/demo/image/all/滨江风光带.png",
        detail: "http://www.elvluo.com/applet/demo/image/detail/滨江风光带.jpg",
        name: "滨江风光带",
        url: "bjfgd",
        latitude: 32.0707753860,
        longitude: 118.6938072450
      },
      {
        indexImg: "http://www.elvluo.com/applet/demo/image/all/南京眼.png",
        detail: "http://www.elvluo.com/applet/demo/image/detail/南京眼.jpg",
        name: "南京眼",
        url: "njy",
        latitude: 32.0014560018,
        longitude: 118.7094660124
      },
      {
        indexImg: "http://www.elvluo.com/applet/demo/image/all/南京长江大桥.png",
        detail: "http://www.elvluo.com/applet/demo/image/detail/南京长江大桥.jpg",
        name: "南京长江大桥",
        url: "njcjdq",
        latitude: 32.1189128701,
        longitude: 118.7509252081
      },
      {
        indexImg: "http://www.elvluo.com/applet/demo/image/all/古林公园.png",
        detail: "http://www.elvluo.com/applet/demo/image/detail/古林公园.jpg",
        name: "古林公园",
        url: "glgy",
        latitude: 32.0721332553,
        longitude: 118.7619919978
      },
      {
        indexImg: "http://www.elvluo.com/applet/demo/image/all/台城.png",
        detail: "http://www.elvluo.com/applet/demo/image/detail/台城.jpg",
        name: "台城",
        url: "tc",
        latitude: 32.0651516938,
        longitude: 118.8127850504
      },
      {
        indexImg: "http://www.elvluo.com/applet/demo/image/all/大吉温泉度假村.png",
        detail: "http://www.elvluo.com/applet/demo/image/detail/大吉温泉度假村.jpg",
        name: "大吉温泉度假村",
        url: "djwqdjc",
        latitude: 32.0809867977,
        longitude: 118.4987010084
      },
      {
        indexImg: "http://www.elvluo.com/applet/demo/image/all/大报恩寺.png",
        detail: "http://www.elvluo.com/applet/demo/image/detail/大报恩寺.jpg",
        name: "大报恩寺",
        url: "dbes",
        latitude: 32.0153540896,
        longitude: 118.7894333260
      },
      {
        indexImg: "http://www.elvluo.com/applet/demo/image/all/天妃宫.png",
        detail: "http://www.elvluo.com/applet/demo/image/detail/天妃宫.jpg",
        name: "天妃宫",
        url: "tfg",
        latitude: 32.0976419109,
        longitude: 118.7530243056
      },
      {
        indexImg: "http://www.elvluo.com/applet/demo/image/all/夫子庙.png",
        detail: "http://www.elvluo.com/applet/demo/image/detail/夫子庙.jpg",
        name: "夫子庙",
        url: "fzm",
        latitude: 32.0270145552,
        longitude: 118.7951918209
      },
      {
        indexImg: "http://www.elvluo.com/applet/demo/image/all/六朝博物馆.png",
        detail: "http://www.elvluo.com/applet/demo/image/detail/六朝博物馆.jpg",
        name: "六朝博物馆",
        url: "lcbwg",
        latitude: 32.0487303216,
        longitude: 118.8056788196
      },
      {
        indexImg: "http://www.elvluo.com/applet/demo/image/all/将军山风景区.png",
        detail: "http://www.elvluo.com/applet/demo/image/detail/将军山风景区.jpg",
        name: "将军山风景区",
        url: "jjsfjq",
        latitude: 31.9342321830,
        longitude: 118.7751067746
      },
      {
        indexImg: "http://www.elvluo.com/applet/demo/image/all/幕府山.png",
        detail: "http://www.elvluo.com/applet/demo/image/detail/幕府山.jpg",
        name: "幕府山",
        url: "mfs",
        latitude: 32.1249910612,
        longitude: 118.7877742784
      },
      {
        indexImg: "http://www.elvluo.com/applet/demo/image/all/总统府.png",
        detail: "http://www.elvluo.com/applet/demo/image/detail/总统府.jpg",
        name: "总统府",
        url: "ztf",
        latitude: 32.0506933216,
        longitude: 118.8038628196
      },
      {
        indexImg: "http://www.elvluo.com/applet/demo/image/all/惠济寺.png",
        detail: "http://www.elvluo.com/applet/demo/image/detail/惠济寺.jpg",
        name: "惠济寺",
        url: "hjs",
        latitude: 32.1010254983,
        longitude: 118.5214384144
      },
      {
        indexImg: "http://www.elvluo.com/applet/demo/image/all/明城墙.png",
        detail: "http://www.elvluo.com/applet/demo/image/detail/明城墙.jpg",
        name: "明城墙",
        url: "mcq",
        latitude: 32.0589499197,
        longitude: 118.8282953048
      },
      {
        indexImg: "http://www.elvluo.com/applet/demo/image/all/明孝陵.png",
        detail: "http://www.elvluo.com/applet/demo/image/detail/明孝陵.jpg",
        name: "明孝陵",
        url: "mxl",
        latitude: 32.0644154346,
        longitude: 118.8461735960
      },
      {
        indexImg: "http://www.elvluo.com/applet/demo/image/all/明文化村.png",
        detail: "http://www.elvluo.com/applet/demo/image/detail/明文化村.jpg",
        name: "明文化村",
        url: "mwhc",
        latitude: 32.0683687312,
        longitude: 119.0078693354
      },
      {
        indexImg: "http://www.elvluo.com/applet/demo/image/all/朝天宫.png",
        detail: "http://www.elvluo.com/applet/demo/image/detail/朝天宫.jpg",
        name: "朝天宫",
        url: "ctg",
        latitude: 32.0422043146,
        longitude: 118.7790440148
      },
      {
        indexImg: "http://www.elvluo.com/applet/demo/image/all/李香君故居.png",
        detail: "http://www.elvluo.com/applet/demo/image/detail/李香君故居.jpg",
        name: "李香君故居",
        url: "lxjgj",
        latitude: 32.0246845552,
        longitude: 118.7953168209
      },
      {
        indexImg: "http://www.elvluo.com/applet/demo/image/all/栖霞山.png",
        detail: "http://www.elvluo.com/applet/demo/image/detail/栖霞山.jpg",
        name: "栖霞山",
        url: "qxs",
        latitude: 32.1644481812,
        longitude: 118.9770061396
      },
      {
        indexImg: "http://www.elvluo.com/applet/demo/image/all/毗卢寺.png",
        detail: "http://www.elvluo.com/applet/demo/image/detail/毗卢寺.jpg",
        name: "毗卢寺",
        url: "pls",
        latitude: 32.0485503216,
        longitude: 118.8096288196
      },
      {
        indexImg: "http://www.elvluo.com/applet/demo/image/all/江南水师学堂.png",
        detail: "http://www.elvluo.com/applet/demo/image/detail/江南水师学堂.jpg",
        name: "江南水师学堂",
        url: "jnssxt",
        latitude: 32.0922719109,
        longitude: 118.7578643056
      },
      {
        indexImg: "http://www.elvluo.com/applet/demo/image/all/江苏广播电视塔.png",
        detail: "http://www.elvluo.com/applet/demo/image/detail/江苏广播电视塔.jpg",
        name: "江苏广播电视塔",
        url: "jsgbdst",
        latitude: 32.0712982809,
        longitude: 118.7569214495
      },
      {
        indexImg: "http://www.elvluo.com/applet/demo/image/all/汤山颐尚温泉.png",
        detail: "http://www.elvluo.com/applet/demo/image/detail/汤山颐尚温泉.jpg",
        name: "汤山颐尚温泉",
        url: "tsyswq",
        latitude: 32.0531955474,
        longitude: 119.0565930423
      },
      {
        indexImg: "http://www.elvluo.com/applet/demo/image/all/海底世界.png",
        detail: "http://www.elvluo.com/applet/demo/image/detail/海底世界.jpg",
        name: "海底世界",
        url: "hdsj",
        latitude: 32.0591840861,
        longitude: 118.8512327099
      },
      {
        indexImg: "http://www.elvluo.com/applet/demo/image/all/清凉山.png",
        detail: "http://www.elvluo.com/applet/demo/image/detail/清凉山.jpg",
        name: "清凉山",
        url: "qls",
        latitude: 32.0554145917,
        longitude: 118.7680057522
      },
      {
        indexImg: "http://www.elvluo.com/applet/demo/image/all/渡江胜利纪念馆.png",
        detail: "http://www.elvluo.com/applet/demo/image/detail/渡江胜利纪念馆.jpg",
        name: "渡江胜利纪念馆",
        url: "djsljng",
        latitude: 32.0789890410,
        longitude: 118.7384139588
      },
      {
        indexImg: "http://www.elvluo.com/applet/demo/image/all/灵谷寺.png",
        detail: "http://www.elvluo.com/applet/demo/image/detail/灵谷寺.jpg",
        name: "灵谷寺",
        url: "lgs",
        latitude: 32.0606242502,
        longitude: 118.8745043883
      },
      {
        indexImg: "http://www.elvluo.com/applet/demo/image/all/燕子矶公园.png",
        detail: "http://www.elvluo.com/applet/demo/image/detail/燕子矶公园.jpg",
        name: "燕子矶公园",
        url: "yzjgy",
        latitude: 32.1527854011,
        longitude: 118.8238468021
      },
      {
        indexImg: "http://www.elvluo.com/applet/demo/image/all/牛首山.png",
        detail: "http://www.elvluo.com/applet/demo/image/detail/牛首山.jpg",
        name: "牛首山",
        url: "nss",
        latitude: 31.9189682106,
        longitude: 118.7516631380
      },
      {
        indexImg: "http://www.elvluo.com/applet/demo/image/all/白马石刻公园.png",
        detail: "http://www.elvluo.com/applet/demo/image/detail/白马石刻公园.jpg",
        name: "白马石刻公园",
        url: "bmskgy",
        latitude: 32.0663717291,
        longitude: 118.8219028082
      },
      {
        indexImg: "http://www.elvluo.com/applet/demo/image/all/白鹭洲公园.png",
        detail: "http://www.elvluo.com/applet/demo/image/detail/白鹭洲公园.jpg",
        name: "白鹭洲公园",
        url: "blzgy",
        latitude: 32.0238555552,
        longitude: 118.8014068209
      },
      {
        indexImg: "http://www.elvluo.com/applet/demo/image/all/瞻园.png",
        detail: "http://www.elvluo.com/applet/demo/image/detail/瞻园.jpg",
        name: "瞻园",
        url: "zy",
        latitude: 32.0275145552,
        longitude: 118.7916968209
      },
      {
        indexImg: "http://www.elvluo.com/applet/demo/image/all/石塘人家.png",
        detail: "http://www.elvluo.com/applet/demo/image/detail/石塘人家.jpg",
        name: "石塘人家",
        url: "strj",
        latitude: 31.7308528302,
        longitude: 118.7205596228
      },
      {
        indexImg: "http://www.elvluo.com/applet/demo/image/all/石头城.png",
        detail: "http://www.elvluo.com/applet/demo/image/detail/石头城.jpg",
        name: "石头城",
        url: "stc",
        latitude: 32.0565118789,
        longitude: 118.7609813527
      },
      {
        indexImg: "http://www.elvluo.com/applet/demo/image/all/红山森林动物园.png",
        detail: "http://www.elvluo.com/applet/demo/image/detail/红山森林动物园.jpg",
        name: "红山森林动物园",
        url: "hssldwy",
        latitude: 32.0982419015,
        longitude: 118.8097694058
      },
      {
        indexImg: "http://www.elvluo.com/applet/demo/image/all/绿博园.png",
        detail: "http://www.elvluo.com/applet/demo/image/detail/绿博园.jpg",
        name: "绿博园",
        url: "lby",
        latitude: 32.0303053409,
        longitude: 118.7231293979
      },
      {
        indexImg: "http://www.elvluo.com/applet/demo/image/all/美龄宫.png",
        detail: "http://www.elvluo.com/applet/demo/image/detail/美龄宫.jpg",
        name: "美龄宫",
        url: "mlg",
        latitude: 32.0512934012,
        longitude: 118.8531278718
      },
      {
        indexImg: "http://www.elvluo.com/applet/demo/image/all/老山国家森林公园.png",
        detail: "http://www.elvluo.com/applet/demo/image/detail/老山国家森林公园.jpg",
        name: "老山国家森林公园",
        url: "lsgjslgy",
        latitude: 32.1176535253,
        longitude: 118.6284159804
      },
      {
        indexImg: "http://www.elvluo.com/applet/demo/image/all/老门东.png",
        detail: "http://www.elvluo.com/applet/demo/image/detail/老门东.jpg",
        name: "老门东",
        url: "lmd",
        latitude: 32.0173009477,
        longitude: 118.7937113663
      },
      {
        indexImg: "http://www.elvluo.com/applet/demo/image/all/莫愁湖公园.png",
        detail: "http://www.elvluo.com/applet/demo/image/detail/莫愁湖公园.jpg",
        name: "莫愁湖公园",
        url: "mchgy",
        latitude: 32.0429987347,
        longitude: 118.7670319280
      },
      {
        indexImg: "http://www.elvluo.com/applet/demo/image/all/郑和墓.png",
        detail: "http://www.elvluo.com/applet/demo/image/detail/郑和墓.jpg",
        name: "郑和墓",
        url: "zhm",
        latitude: 31.9139009862,
        longitude: 118.7389318026
      },
      {
        indexImg: "http://www.elvluo.com/applet/demo/image/all/浡泥国王墓.png",
        detail: "http://www.elvluo.com/applet/demo/image/detail/浡泥国王墓.jpg",
        name: "浡泥国王墓",
        url: "bngwm",
        latitude: 31.9818523444,
        longitude: 118.7643751129
      },
      {
        indexImg: "http://www.elvluo.com/applet/demo/image/all/阅江楼.png",
        detail: "http://www.elvluo.com/applet/demo/image/detail/阅江楼.jpg",
        name: "阅江楼",
        url: "yjl",
        latitude: 32.0991699109,
        longitude: 118.7541733056
      },
      {
        indexImg: "http://www.elvluo.com/applet/demo/image/all/雨花台.png",
        detail: "http://www.elvluo.com/applet/demo/image/detail/雨花台.jpg",
        name: "雨花台",
        url: "yht",
        latitude: 32.0036385948,
        longitude: 118.7882893379
      },
      {
        indexImg: "http://www.elvluo.com/applet/demo/image/all/青奥中心.png",
        detail: "http://www.elvluo.com/applet/demo/image/detail/青奥中心.jpg",
        name: "青奥中心",
        url: "qazx",
        latitude: 31.9975640296,
        longitude: 118.7163524697
      },
      {
        indexImg: "http://www.elvluo.com/applet/demo/image/all/中山植物园.png",
        detail: "http://www.elvluo.com/applet/demo/image/detail/中山植物园.jpg",
        name: "中山植物园",
        url: "zszwy",
        latitude: 32.0587884821,
        longitude: 118.8407072953
      },
      {
        indexImg: "http://www.elvluo.com/applet/demo/image/all/静海寺.png",
        detail: "http://www.elvluo.com/applet/demo/image/detail/静海寺.jpg",
        name: "静海寺",
        url: "jhs",
        latitude: 32.0979843259,
        longitude: 118.7512498814
      },
      {
        indexImg: "http://www.elvluo.com/applet/demo/image/all/颐和路公馆区.png",
        detail: "http://www.elvluo.com/applet/demo/image/detail/颐和路公馆区.jpg",
        name: "颐和路公馆区",
        url: "yhlggq",
        latitude: 32.0691242908,
        longitude: 118.7769976376
      },
      {
        indexImg: "http://www.elvluo.com/applet/demo/image/all/马歇尔旧居.png",
        detail: "http://www.elvluo.com/applet/demo/image/detail/马歇尔旧居.jpg",
        name: "马歇尔旧居",
        url: "mxejj",
        latitude: 32.0702042908,
        longitude: 118.7759476376
      },
      {
        indexImg: "http://www.elvluo.com/applet/demo/image/all/高淳国际慢城.png",
        detail: "http://www.elvluo.com/applet/demo/image/detail/高淳国际慢城.jpg",
        name: "高淳国际慢城",
        url: "gcgjmc",
        latitude: 31.4243241378,
        longitude: 119.0919757466
      },
      {
        indexImg: "http://www.elvluo.com/applet/demo/image/all/鸡鸣寺.png",
        detail: "http://www.elvluo.com/applet/demo/image/detail/鸡鸣寺.jpg",

        name: "鸡鸣寺",
        url: "jms",
        latitude: 32.0673367242,
        longitude: 118.8016580176
      },
      {
        indexImg: "http://www.elvluo.com/applet/demo/image/all/鼓楼公园.png",
        detail: "http://www.elvluo.com/applet/demo/image/detail/鼓楼公园.jpg",
        name: "鼓楼公园",
        url: "glgy",
        latitude: 32.0647910741,
        longitude: 118.7885706259
      },
      {
        indexImg: "http://www.elvluo.com/applet/demo/image/all/龙江宝船厂.png",
        detail: "http://www.elvluo.com/applet/demo/image/detail/龙江宝船厂.jpg",
        name: "龙江宝船厂",
        url: "ljbcc",
        latitude: 32.0668883016,
        longitude: 118.7406799540
      }

    ],
    nearScenicLatitude: '', //两公里内景区经度  
    nearScenicLongitude: '', //两公里内景区维度度  
  },
  //获取距离景区的公里数
  GetDistance: function(lat1, lng1, lat2, lng2) {
    var radLat1 = lat1 * Math.PI / 180.0;
    var radLat2 = lat2 * Math.PI / 180.0;
    var a = radLat1 - radLat2;
    var b = lng1 * Math.PI / 180.0 - lng2 * Math.PI / 180.0;
    var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) +
      Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
    s = s * 6378.137; // EARTH_RADIUS;
    s = Math.round(s * 10000) / 10000; //输出为公里
    return s;
  },
  indexHref: function() {
    console.log('indexHref')
    var that = this;
    /* 获取定位地理位置 */
    // 新建bmap对象   
    var BMap = new bmap.BMapWX({
      ak: that.data.ak
    });
    var fail = function(data) {
      console.log('error');
    };
    var success = function(data) {
      console.log('ok');
      //返回数据内，已经包含经纬度  
      this.latitude = data.originalData.result.location.lat;
      console.log('维度' + this.latitude)
      this.longitude = data.originalData.result.location.lng;
      console.log('经度' + this.longitude)
      //循环获取所有的景点
      for (var i = 0; i < that.data.scenicInfo.length; i++) {
        var w = that.data.scenicInfo[i].latitude;
        var j = that.data.scenicInfo[i].longitude;

        //前两个参数是所在经纬，后两个是景区经纬
        if (that.GetDistance(this.latitude, this.longitude, w, j) <= 1) {
          that.data.nearScenicLatitude = w;
          that.data.nearScenicLongitude = j;
          console.log('se' + that.data.nearScenicLatitude)
          console.log('se' + that.data.nearScenicLongitude)
          wx.navigateTo({
            url: '../items/items?name=' + that.data.scenicInfo[i].name + ''
          })
          return false;
        } else {
          continue;
        }
      }
    }
    // 发起regeocoding检索请求   
    BMap.regeocoding({
      fail: fail,
      success: success
    });
  },

  selectReturn: function() {
    var that = this;
    /* 获取定位地理位置 */
    // 新建bmap对象   
    var BMap = new bmap.BMapWX({
      ak: that.data.ak
    });
    var fail = function(data) {
      console.log('error');
    };
    var success = function(data) {
      console.log('ok');
      //返回数据内，已经包含经纬度  
      this.latitude = data.originalData.result.location.lat;
      console.log('维度' + this.latitude)
      this.longitude = data.originalData.result.location.lng;
      console.log('经度' + this.longitude)
      //因为indexHref刚打开应用就执行了，所以that.data.nearScenicLongitude；that.data.nearScenicLatitude（距离自己两公里内的景点）会有值；
      //之后每隔xx分钟后判断离这个景点是否大于两公里
      if (that.GetDistance(this.latitude, this.longitude, that.data.nearScenicLatitude, that.data.nearScenicLongitude) > 1) {
        wx.navigateBack();
      } else {
        return false;
      }
    }
    // 发起regeocoding检索请求   
    BMap.regeocoding({
      fail: fail,
      success: success
    });
  },
})