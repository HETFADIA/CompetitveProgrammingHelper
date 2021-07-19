function arraytolist(arr){
    var arraysize=arr.length
    
    var second="[";
    for(let i=0;i<arraysize;i++){
        
        
        
        if(i!=arraysize-1){
            second+=arr[i]+", ";
        }
        else{
            second+=arr[i];
        }
    }
    second+="]";
    return second;
}
function arraytovector(arr){
    var arraysize=arr.length
    
    var second="{";
    for(let i=0;i<arraysize;i++){
        
        
        
        if(i!=arraysize-1){
            second+=arr[i]+", ";
        }
        else{
            second+=arr[i];
        }
    }
    second+="}";
    return second;
}
ans=arraytolist([1,2,3,4])
console.log(ans)
ans=arraytovector([1,2,3,4])
console.log(ans)