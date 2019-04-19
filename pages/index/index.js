// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bigimg:{
      imgSrc:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555347265438&di=14fefc944001daffa1ee9e1cf8126631&imgtype=0&src=http%3A%2F%2Fspider.nosdn.127.net%2Fc0c9b71cdd71d268190bf0737ea39c12.png",
      smallTitle:"珍惜身边逗你笑的朋友珍惜身边逗你笑的朋友珍惜身边逗你笑的朋友珍惜身边逗你笑的朋友珍惜身边逗你笑的朋友",
      mainTitle:'"那个逗我笑的朋友，得了抑郁症"'
    },
    fulltext:{
      mainText:'"我等了三年，就是想等一个机会，我要挣一口气，不是想证明我了不起，只是要证明我失去的东西，我一定要拿回来。"',
      headText:"香港电影的道"
    },
    imgText:{
      mainText:"鲁迅笔下最经典的28句话，透彻人心，一生至少读一次！",
      smallTitle:"与君初相识，犹如故人归。",
      imgSrc:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=332423240,3838153215&fm=26&gp=0.jpg"
    },
    nineImg:{
      imgArr:[
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3470731675,180486144&fm=26&gp=0.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555517452026&di=96dd2f4f6a26d55503bfd147d2f1009a&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201208%2F24%2F20120824153617_hTHeL.thumb.700_0.jpeg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555517452026&di=701e3cb17a6d868048e87579eac86127&imgtype=0&src=http%3A%2F%2Fimages.ali213.net%2Fpicfile%2Fpic%2F2013%2F04%2F09%2F927_hzw%2520%25287%2529.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555517452026&di=af8a38bf7e3221172b21193d3a2f9b74&imgtype=0&src=http%3A%2F%2Fimage20.it168.com%2Fpicshow%2F900x675%2F20111124%2F2011112416143508129.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555517452026&di=f738a98cf3aa8a315b8f157528de9dfb&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201506%2F02%2F20150602140157_UHvYx.jpeg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555517452025&di=6decd3ed397676701303df3d3c404ee0&imgtype=0&src=http%3A%2F%2Ftvax3.sinaimg.cn%2Fcrop.0.0.750.750.1024%2F005YeltJly8fyl2ccbmr3j30ku0ku0to.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555517452025&di=083720e7404e10736b414921fe99b239&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201610%2F24%2F20161024160810_xusFa.jpeg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555517452023&di=2a6098a93092f8abaa1031b702a66315&imgtype=0&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201309%2F20%2F20130920120552_mNUuk.jpeg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555517452022&di=fe4b0fd2779b1117f443e356c1f5e213&imgtype=0&src=http%3A%2F%2Fimg.youxile.com%2Fpic%2F1606%2F172621.png"
      ],
      mainText:"海贼王是最自由的！",
      smallTitle:"路飞说:我可是要做海贼王的男人啊，怎么可以在这里倒下",
      imgNum:10,
    },
    video:{
      src:"http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
      mainText:'"如今的年轻人，每个人都是一座孤岛"|如何进入另一个人的灵魂',
      smallTitle:"唯有深度的沟通和深刻的联结，才能真正刺破漫天无边际的孤独与空虚。"

    },
  },
  onscroll:function(e){
    console.log(e);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  onPageScroll:function(){

  }
})