function is_sorted(a){for(var i=0;i<a.length-1;i++){if(a[i]>a[i+1]){return 0;}}return 1;}
function reversed(a){var res=[];for(let i=a.length-1;i>=0;i--){res.push(a[i])}return res;}
function sort(a){a.sort(function(a,b){return a-b;})}
function next_permutation(a){
    if(is_sorted(reversed(a))){
        sort(a)
        return 0;
    }
    n=a.length;
    for(var i = n - 1; i > 0; i--){
        if(a[i-1] < a[i]){
            pnt = i-1;
            break;
        }
    }
    var pnt2 = n - 1;
    for(var i = pnt + 1; i < n; i++){
        if(a[pnt] >= a[i]){
            pnt2 = i - 1;
            break;
        }
    }
    swap(a[pnt], a[pnt2]);
    reverse(a.begin() + pnt + 1, a.end());
    return 1;
}
a=[3,2,1]
console.log(next_permutation(a))
console.log(a)
function swap(a,b){[a,b]=[b,a]}
a=4
b=3
swap(a,b)
console.log(a,b)