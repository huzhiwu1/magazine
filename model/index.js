let Request = require("../utils/request");

class indexModel extends Request{
    getArticleList(magazineId=0,start=0){
        return this.getData({
            url:`/getIndexArticleList/${magazineId}/${start}`
        })
    }
    // 获取首页标记标签列表
    getMarkTypeList(){
        return this.getData({
            url:'/getMarkTypeList/0'
        })
    }
    // 文章首页推荐详情
    getRecommendInfo(){
        return this.getData({
            url:'/getRecommendInfo/0'
        })
    }
}
module.exports = indexModel;