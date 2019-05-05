// components/articleList/cmp.js
let indexModel = require("../../model/index");
let indexRequest = new indexModel;
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    articleList:Array,
    more:{
      type:String,
      value:"",
      observer:'getMoreArticle'
    },
    magazineId:Number,
  },

  /**
   * 组件的初始数据
   */
  data: {
    loading:false,//避免重复加载，在网络请求还没回来时不能再次加载，加个锁
    notMore:false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getMoreArticle(){
      if(this.data.loading && !notMore){
        return;//如果是在加载，则直接返回
        // 如果已经没有更多数据了也直接返回
      }
      this.setData({
        loading:true,//如果不是在加载，则此时可以请求网络，给loading加锁
      })
      const magazineId = this.data.magazineId;
      const start = this.data.articleList.length;
      indexRequest.getArticleList(magazineId,start).then(res=>{
        let newArticleList = this.data.articleList.concat(res);
        // 如果没有更多数据了，则newArticleList和原来的this.data.articleList长度相等
        if(newArticleList.length==this.data.articleList.length){
          this.setData({
            notMore:true,
          })
        }
        this.setData({
          articleList:newArticleList,
          loading:false
        })
        // 请求回来后开个锁
        
      })
    }
  }
})
