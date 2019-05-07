// components/search/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    searchValue:String,
    value:String,
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
    onSearch(e){
      if(e.detail.value=="读书"){
        wx.navigateTo({
          url:"/pages/search/index?wd="+e.detail.value
        })
      }else{
        wx.showToast({
          title:"只能搜索读书"
        })
      }
     
    },
    getValue(e){
      console.log(e);
      this.setData({
        value:e.detail.value
      })
    },
    searchBtn(){
      console.log(this.data.value)
      if(this.data.value=="读书"){
        wx.navigateTo({
          url:'/pages/search/index?wd='+this.data.value
        })
      }else{
        wx.showToast({
          title:"只能搜索读书"
        })
      }
      
    }
  }
})
