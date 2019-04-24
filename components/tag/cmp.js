// components/tag/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    typeid:Number,
    tagName:String
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
    gotoType:function(e){
      const typeid = e.currentTarget.dataset.typeid;
      wx.navigateTo({
        url:"/pages/type/index?typeid=${typeid}"
      })
    }
  }
})
