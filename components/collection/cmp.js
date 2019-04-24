// components/collection/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isLike:Boolean,
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
    likeIt:function(){
      this.setData({
        isLike:!this.data.isLike,
      })
    }
  }

})
