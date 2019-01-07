var app = getApp()
Page({
  data: {
    scenicInfo: app.data.scenicInfo,
    winHeight: "", //窗口高度
    currentTab: 0, //预设当前项的值
    scrollLeft: 0, //tab标题的滚动条位置
    banner: {
      imgUrls: [
        '../image/carousel/1.png',
        '../image/carousel/2.png',
        '../image/carousel/3.png'
      ],
      indicatorDots: false, //是否显示面板指示点
      autoplay: true, //是否自动切换
      interval: 4000, //自动切换时间间隔
      duration: 1000, //滑动动画时长

    },
    recommend: {
      imgUrls: [{
          'img': '../image/recommend/1.png',
          'title': '中华门',
        },
        {
          'img': '../image/recommend/2.png',
          'title': '玄武湖',
        },
        {
          'img': '../image/recommend/3.png',
          'title': '夫子庙',
        },
        {
          'img': '../image/recommend/4.png',
          'title': '中山陵',
        }
      ],
    },

  },
  //判断当前滚动超过一屏时，设置tab标题滚动条。
  checkCor: function() {
    if (this.data.currentTab > 4) {
      this.setData({
        scrollLeft: 300
      })
    } else {
      this.setData({
        scrollLeft: 0
      })
    }
  },

  onLoad: function(options) {
    app.indexHref();
    var that = this;
    // 高度自适应
    wx.getSystemInfo({
      success: function(res) {
        var clientHeight = res.windowHeight,
          clientWidth = res.windowWidth,
          rpxR = 750 / clientWidth;
        var calc = clientHeight * rpxR - 180;
        console.log(calc)
        that.setData({
          winHeight: calc
        });
      }
    });
    //每隔x分钟判断用户所在位置
    setInterval(function() {
      (function() {
        var pages = getCurrentPages() //获取加载的页面
        var currentPage = pages[pages.length - 1] //获取当前页面的对象
        var url = currentPage.route //当前页面url
        var s1 = url.split('/')[1];
        if (s1 == 'index') {
          app.indexHref();
        } else {
          return false;
        }
      })()
    }, 5000)
  }
})