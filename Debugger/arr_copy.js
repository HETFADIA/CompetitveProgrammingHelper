function reversed(a){var res=[];for(let i=a.length-1;i>=0;i--){res.push(a[i])}return res;}
function sorted(arr,reverse=false){
    var a=arr.slice()
    a.sort(function(a,b){return a-b;})
    if(reverse==false){
        return a;
    }
    return reversed(a)
}
a=[1,4,3,2]
console.log(sorted(a))
console.log(a)