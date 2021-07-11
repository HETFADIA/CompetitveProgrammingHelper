function len(a){if(typeof a=="number"){return len(str(a))}return a.length}
function bit_length(a){if(a==0){return 0}return len(bin(abs(a)));}
function str(a){ return a.toString()}
function bin(a,twoCompelment=1,dtype=64){
    if(twoCompelment && a<0){
        return twosComplement(a,dtype)
    }
    return a.toString(2);
}
function itself(a){
    return a;
}
function mod2(a){
    return a%2;
}
function sort(a,key=itself,reverse=false){
    var mul=1;
    if(reverse){mul=-1;}
    a.sort(function(a,b){return mul*(key(a)-key(b));})
}

arr=["high","low","nice"]
sort(arr)
console.log(arr)
arr1=[1,2,3,4,0]
sort(arr1,key=mod2)
console.log(arr1)
sort(arr1,key=mod2,reverse=true)
console.log(arr1)
function sorted(a,key=itself,reverse=false){
    var arr=a.slice();
    sort(arr,key,reverse);
    return arr;
}
a=[1,2,3,4]
console.log(sorted(a,mod2))
console.log(a)