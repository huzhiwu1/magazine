// pages/search/index.js
let searchModel = require("../../model/search/");
let search = new searchModel;
let randomStr = require("../../utils/randomStr");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchWord:"",
    articleList:[],
    recommend:[],
    more:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    const wd = options.wd;
    console.log(wd);
    this.setData({
      searchWord:wd,
    })
    // let articleList = search.getData()
    // this.setData({
    //   articleList,
    // })
   this.getData();
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  getData(word){
    let count = this.data.articleList.length
    let that = this;
    let articleList = search.getSearchArticle('读书',count);
    let recommend = search.getRecommend();

    Promise.all([articleList,recommend]).then(res=>{
      that.setData({
        articleList:res[0],
        recommend:res[1]
      })
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // this.setData({
    //   searchWord:''
    // })
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
    console.log(randomStr(20))
    this.setData({
      more:randomStr(20),
    })
    console.log("你好")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})