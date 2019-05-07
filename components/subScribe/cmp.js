// components/subScribe/cmp.js
let subScribeModel = require("../../model/subScribeModel");
let  subScribe  = new subScribeModel;
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tag:String,
    tagId:Number
  },

  /**
   * 组件的初始数据
   */
  data: {
    class:""
  },
  attached() {
    // 在组件实例进入页面节点树时执行
    let that = this;
    let subList = subScribe.getSubScribe()||[];
    // console.log(subList)
    subList.forEach(function(item,index){
      // console.log(item)
      if(item.tagId==that.data.tagId){
        // console.log(item.tagId,that.data.tagId)
        that.setData({
          class:"subscribe"
        })
      }
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    // 处理订阅的按钮
    onTap(){
      //将订阅的信息存储在缓存中

      const mark = {
        tag:this.data.tag,
        tagId:this.data.tagId,
      }
      let subList = subScribe.getSubScribe()||[];
      if(this.data.class==""){
        subList.push(mark);
        subScribe.setSubScribe(subList);
      }else{
        subList.forEach(function(item,index){
         if(item.tagId==mark.tagId){
           subList.splice(index,1);
         }
        
        })

        subScribe.setSubScribe(subList);
      }
      

      let className="";
      if(this.data.class==""){
        className="subscribe"
      }
      this.setData({
        class:className,
      })

      // 触发自定义事件，让标签添加到我的杂志
      this.triggerEvent("addLabel")
    }
  },
//判断在缓存中是不是订阅了
  
})
