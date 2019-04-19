// components/nineImg/cmp.js
let myBeh = require("../behaviors/my-behavior.js");
Component({
  /**
   * 组件的属性列表
   */
  behaviors:[myBeh],
  properties: {
    imgArr:Array,
    imgNum:Number,
    // imgArr:{
    //   type:Array,
    //   value:[
    //     "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3470731675,180486144&fm=26&gp=0.jpg",
    //     "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555517452026&di=96dd2f4f6a26d55503bfd147d2f1009a&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201208%2F24%2F20120824153617_hTHeL.thumb.700_0.jpeg",
    //     "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555517452026&di=701e3cb17a6d868048e87579eac86127&imgtype=0&src=http%3A%2F%2Fimages.ali213.net%2Fpicfile%2Fpic%2F2013%2F04%2F09%2F927_hzw%2520%25287%2529.jpg",
    //     "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555517452026&di=af8a38bf7e3221172b21193d3a2f9b74&imgtype=0&src=http%3A%2F%2Fimage20.it168.com%2Fpicshow%2F900x675%2F20111124%2F2011112416143508129.jpg",
    //     "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555517452026&di=f738a98cf3aa8a315b8f157528de9dfb&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201506%2F02%2F20150602140157_UHvYx.jpeg",
    //     "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555517452025&di=6decd3ed397676701303df3d3c404ee0&imgtype=0&src=http%3A%2F%2Ftvax3.sinaimg.cn%2Fcrop.0.0.750.750.1024%2F005YeltJly8fyl2ccbmr3j30ku0ku0to.jpg",
    //     "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555517452025&di=083720e7404e10736b414921fe99b239&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201610%2F24%2F20161024160810_xusFa.jpeg",
    //     "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555517452023&di=2a6098a93092f8abaa1031b702a66315&imgtype=0&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201309%2F20%2F20130920120552_mNUuk.jpeg",
    //     "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555517452022&di=fe4b0fd2779b1117f443e356c1f5e213&imgtype=0&src=http%3A%2F%2Fimg.youxile.com%2Fpic%2F1606%2F172621.png"
    //   ],
    //   observer:function(old,newVal,changePath){

    //   }
    // },
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showImg:function(e){
      let that = this;

      let currentUrl = e.currentTarget.dataset.currenturl;

      wx.previewImage({
        current:currentUrl,
        urls:that.properties.imgArr,
      })
      
    }
  }
})
