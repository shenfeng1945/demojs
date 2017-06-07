/**
 * Created by lzc on 2017/6/7.
 */
var hash = []
function sort(array){
    for(var i=0;i<array.length;i++){
        var number = array[i]
        if(number in hash){
            hash[number]+=1
        }else{
            hash[number]=1
        }
    }
    var result = []
    for(var j=0;j<hash.length;j++){
        if(hash[j]!==undefined){
            for(var count=1;count<=hash[j];count++){
                result.push(j)
            }
        }
    }
    return console.log(result)
}
sort([])