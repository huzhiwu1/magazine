let Request = require("../utils/request");

class searchModel extends Request{
    getSearchArticle(word='读书',count=0){
        return this.getData({
            url:`/searchArticleList/${word}/${count}`
        })
    }
    getRecommend(word='读书'){
        return this.getData({
            url:`/searchArticleRecommend/${word}`
        })
    }
}
module.exports = searchModel;