class subScribeModel{
    getSubScribe(){
        return wx.getStorageSync("SubScribe")
    }
    setSubScribe(value){
        wx.setStorageSync('SubScribe',value)
    }
}
module.exports= subScribeModel