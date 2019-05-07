// components/recommend/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    date:String,
    title:{
      type:String,
      value:"加拿大连锁书店indigo重塑图书销售业"
    },
    imgSrc:{
      type:String,
      value:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557071323306&di=6031227d631a18c0fda654cee33cf7e7&imgtype=0&src=http%3A%2F%2Fgz6hs.com%2Fuploads%2Fallimg%2F140218%2F1_140218094954_7.JPG',
    },
    magazineIndex:Number
  },

  /**
   * 组件的初始数据
   */
  data: {
    magazineType:["轻芒","兴趣","物质","世界","新事","灵魂"]
  },
  attached(){
    this.getDate();
  },
  /**
   * 组件的方法列表
   */
  methods: {
    getDate(){
      const monthArr=['一','二','三','四','五','六','七','八','九','十','十一',"十二"];
      const dayArr=['一','二','三','四','五','六','七','八','九','十','十一',"十二",
                    "十三","十四","十五","十六","十七","十八","十九","二十",
                    "二十一","二十二","二十三","二十四","二十五","二十六","二十七","二十八","二十九","三十","三十一",]
      let month = new Date().getMonth();
      let day = new Date().getDate();
      month = monthArr[month];
      day = dayArr[(day-1)];
      // console.log(month,day);
      this.setData({
        date:`${month}月${day}日`
      })
    }
  }
})
