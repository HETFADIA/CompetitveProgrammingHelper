function reversed(a){var res=[];for(let i=a.length-1;i>=0;i--){res.push(a[i])}return res;}
function reverse(a,start=undefined,end=undefined){
    if(start==undefined){start=0;}
    if(end==undefined){end=a.length}
    var iter1=start;
    var iter2=end-1;
    while(iter1<iter2){
        [a[iter1],a[iter2]]=[a[iter2],a[iter1]]
        iter1++;
        iter2--;
    }

}
a=[1,2,3,4,5]
reverse(a,2,5)
console.log(a)
