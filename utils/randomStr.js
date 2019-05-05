const strArr=['a','A','b','B','c','C','d','D','e','E','f','F','g','G','h','H','i','I','j','J','k',
'K','l','L','m','M','n','N','o','O','p','P','q','Q','r','R','s','S','t','T','u','U','v','V','w','W','x','X','y','Y','z','Z'];

let randomStr = function(n){
    var str="";
    for(var i=0;i<n;i++){
        var index = Math.floor(Math.random()*52);
        str+=strArr[index];
    }
    return str;
}

module.exports = randomStr;