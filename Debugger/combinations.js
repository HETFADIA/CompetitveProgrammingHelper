
var string=""
function arraytostring(array){
    string="";
    for(var i=0;i<array.length;i++){
        string+=array[i]+" ";
    }
    return string;
}
function _combinations(given_arr,given_length,temp,index){
    if(temp.length==given_length){
        console.log(temp)
        string+=arraytostring(temp)+"<br>"
    }
    if(index>=given_arr.length){
        return ;
    }
    _combinations(given_arr,given_length,temp,index+1)
    temp.push(given_arr[index])
    _combinations(given_arr,given_length,temp,index+1)
    temp.pop()
    
}

function combinations(arr,length=undefined){
    if(length==undefined){
        length=arr.length
    }
    string=""
    _combinations(arr,length,[],0)
    
}
arr=[1,2,3,4]
ans=combinations(arr,2)

console.log(string)