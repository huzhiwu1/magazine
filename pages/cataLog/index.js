// pages/catalog/catalog.js
import {tagInfoList} from "../../utils/tagList.js";
// import {SubscribeModel} from "../../models/subscribe.js";
// const subscribeModel = new SubscribeModel()]
let subScribeModel = require("../../model/subScribeModel");
let subScribe = new subScribeModel;


Page({

  /**
   * 页面的初始数据
   */
  data: {
    tagInfoList: tagInfoList,
    myTagList: [],
    searchWord: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData()
    
  },

  onShow() {
    this.setData({
      searchWord: ''
    })
  },

  onSubscribeTap() {
    this.getData()
    console.log(11)
  },

  getData() {
    const myTagList = subScribe.getSubScribe();
    this.setData({
      myTagList
    })
  }


})