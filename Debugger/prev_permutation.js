function is_sorted(a){for(var i=0;i<a.length-1;i++){if(a[i]>a[i+1]){return 0;}}return 1;}
function reversed(a){var res=[];for(let i=a.length-1;i>=0;i--){res.push(a[i])}return res;}
function reversearr(a,start=undefined,end=undefined){
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
function itself(a){return a;}
function sort(a,key=itself,reverse=false){
    var mul=1;
    if(reverse){mul=-1;}
    a.sort(function(a,b){return mul*(key(a)-key(b));})
}

function prev_permutation(a){
    if(is_sorted(a)){
        sort(a,itself,reverse=true)
        return 0;
    }
    n=a.length;
    for(var i = n - 1; i > 0; i--){
        if(a[i-1] > a[i]){
            pnt = i-1;
            break;
        }
    }
    var pnt2 = n - 1;
    for(var i = pnt + 1; i < n; i++){
        if(a[pnt] <= a[i]){
            pnt2 = i - 1;
            break;
        }
    }
    [a[pnt], a[pnt2]]=[a[pnt2],a[pnt]]
    reversearr(a,pnt+1,a.length)
    return 1;

}
a=[1,2,3,4,5,6,7]

console.log(prev_permutation(a))
console.log(a)
console.log(prev_permutation(a))
console.log(a)
console.log(prev_permutation(a))
console.log(a)
console.log(prev_permutation(a))
console.log(a)
console.log(prev_permutation(a))
console.log(a)
console.log(prev_permutation(a))
console.log(a)
console.log(prev_permutation(a))
console.log(a)
