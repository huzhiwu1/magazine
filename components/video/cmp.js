// components/video/cmp.js
let myBeh = require("../behaviors/my-behavior.js");
Component({
  /**
   * 组件的属性列表
   */
  behaviors:[myBeh],
  properties: {
    poster:{
      type:String,
      value:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555657136791&di=de1c0b538e98792cec11863d14997b2a&imgtype=0&src=http%3A%2F%2Fpic31.nipic.com%2F20130803%2F13368878_090436425147_2.png",
      observer:function(old,newVal,changPath){
        
      }
    },
    duration:{
      type:Number,
      value:"6'15\"",
      observer:function(old,newVal,changePath){

      }
    },
    videoId:String,
    videoSrc:String
  },

  /**
   * 组件的初始数据
   */
  data: {
    controlsImg:'./image/play.png',
    maskDisplay:true,
    showVideo:false,
    controls:true,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onVideoPlay:function(){
      this.setData({
        maskDisplay:false,
        showVideo:true,
      })
      let video = wx.createVideoContext(this.properties.videoId,this);
      video.play();
     
    },
    videoEnd:function(){
      this.setData({
        maskDisplay:true,
        showVideo:false,
      })
    },
    offMask:function(){
     
      this.setData({
        maskDisplay:true,
        showVideo:false,
      })
      let video = wx.createVideoContext(this.properties.videoId,this);
      video.stop();
    },
   
    
    
  }
})
