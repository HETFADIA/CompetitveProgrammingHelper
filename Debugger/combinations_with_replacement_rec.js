
var string=""
function arraytostring(array){
    string="";
    for(var i=0;i<array.length;i++){
        string+=array[i]+" ";
    }
    return string;
}
function _combinations(given_arr,given_length,temp,index,saved,depth){
    if(temp.length==given_length && saved==0){

        string+=arraytostring(temp)+"<br>"
    }
    if(index>=given_arr.length){
        return ;
    }
    if(depth<given_length){

        temp.push(given_arr[index])
        _combinations(given_arr,given_length,temp,index+1,0,depth+1)
        temp.pop()
    }

    _combinations(given_arr,given_length,temp,index,saved+1,depth)
    
}

function combinations(arr,length=undefined){
    if(length==undefined){
        length=arr.length
    }
    string=""
    _combinations(arr,length,[],0,0,0)
    
}
arr=[1,2,3,4,5]
ans=combinations(arr,2)

console.log(string)