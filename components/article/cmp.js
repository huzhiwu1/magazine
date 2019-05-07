// components/article/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    articleDetail:Object,
   
  },

  /**
   * 组件的初始数据
   */
  data: {

      isLike:false
  },
// 组件被加载时触发
attached(){
  let articleDetail = this.data.articleDetail;
  let likeArr = wx.getStorageSync("like") || [];
  let artId = articleDetail.artId;
//  判断文章是不是被喜欢过
  likeArr.forEach((item,index)=>{
    if(item.artId==artId){
      this.setData({
        isLike:true
      })
    }
  })
},
  /**
   * 组件的方法列表
   */
  methods: {
    onLike(e){
      console.log(e.detail.like)
      const  like = e.detail.like;
      // 如果喜欢则收藏，如果不喜欢则撤销收藏
      // 存储到缓存中去
      let articleDetail = this.data.articleDetail;
      let likeArr = wx.getStorageSync("like") || [];
      let artId = articleDetail.artId;
      let index = null;
      if(like){
        likeArr.unshift(articleDetail);
        wx.setStorageSync("like",likeArr)
      }else{
        likeArr.forEach((item,index)=>{
          if(item.artId == artId){
            index = index;
          }
        })
          
        likeArr.splice(index,1);
        wx.setStorageSync("like",likeArr)
      }
    }
  }
})
