let Request = require("../utils/request");

class indexModel extends Request{
    getArticleList(magazineId=0,start=0){
        return this.getData({
            url:`/getIndexArticleList/${magazineId}/${start}`
        })
    }
    // 获取首页标记标签列表
    getMarkTypeList(magazineId=0){
        return this.getData({
            url:`/getMarkTypeList/${magazineId}`
        })
    }
    // 文章首页推荐详情
    getRecommendInfo(magazineId=0){
        return this.getData({
            url:`/getRecommendInfo/${magazineId}`
        })
    }
}
module.exports = indexModel;