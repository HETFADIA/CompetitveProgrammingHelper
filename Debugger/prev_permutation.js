function is_sorted(a){for(var i=0;i<a.length-1;i++){if(a[i]>a[i+1]){return 0;}}return 1;}
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

function sort(a,key=itself,reverse=false){
    var mul=1;
    if(reverse){mul=-1;}
    a.sort(function(a,b){return mul*(key(a)-key(b));})
}
function prev_permutation(a){
    if(is_sorted(a)){
        sort(a,reverse=true)
    }
    
}
a=[1,2,3]
