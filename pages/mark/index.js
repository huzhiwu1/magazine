// pages/mark/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
    getUserInfoBtn:true,
    
  },
  onGetUserInfo:function(e){
    console.log(e);
    let userInfo = e.detail.userInfo;
    if(userInfo){
      this.setData({
        userInfo:userInfo,
        getUserInfoBtn:false,
      })
    }
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.getSetting({
    //   success:res=>{
    //     if(res.authSetting['scope.userInfo']){
    //       wx.getUserInfo({
    //         success:res=>{
    //           console.log(res);
    //         }
    //       })
    //     }
    //   }
    // })
  new Promise((resolve,reject)=>{
    wx.getSetting({//查看用户是否已经授权信息
      success:res=>{
        if(res.authSetting['scope.userInfo']){//true或false，表示用户的授权
          resolve();
        }
      }
    })
  }).then(()=>{
    wx.getUserInfo({//获取用户的信息
      success:res=>{
        this.setData({
          userInfo:res.userInfo,
          getUserInfoBtn:false,
          user:res,
        })

      }
    })
  })
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
    // 用户授权后才能拿到收藏信息
    if(this.data.getUserInfoBtn){
      const likeList = wx.getStorageSync("like");
      this.setData({
        likeList,
      })
    }
   
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

  }
})