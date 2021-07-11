function even(a){
    return a%2==0
}
function odd(a){
    return a%2==1;
}
function min(a,b){return Math.min(a,b)}
function count_if(a,func,start=0,end=undefined){
    if(end==undefined){end=a.length;}
    counter=0;
    for(var i=start;i<end;i++){
        if(func(a[i])){
            counter++;
        }
    }
    return counter;
}
a=[1,2,3]
ans=count_if(a,even)
console.log(ans)
ans=count_if(a,odd)
console.log(ans)