// components/more/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tagName:String,
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
    onMore:function(){
      let that = this;
      wx.showActionSheet({
        itemList:["内容过期了","内容和"+that.properties.tagName+"不相关","不再显示来自"+that.properties.tagName+"的内容"],
        itemColor:'#000',
        success:function(res){
          console.log("你选择了"+res.tapIndex+"的内容")
          if(res.tapIndex==0||res.tapIndex==1){
            wx.showToast({
              title:"已提交",

            })
          }
        }

      })
    }
  }
})
