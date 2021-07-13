function bit_length(a){if(a==0){return 0}return len(bin(abs(a)));}
function len(a){if(typeof a=="number"){return len(str(a))}return a.length}
function abs(a){return Math.abs(a);}
function bin(a,twoCompelment=1,dtype=64){
    if(twoCompelment && a<0){
        return twosComplement(a,dtype)
    }
    return a.toString(2);
}
function flip(a){
    let string=""
    for(var i of a){
        string+=i=='1'?'0':'1';
    }
    return string
}
function twosComplement(a,dtype=64){
    // a is interger
    if(a>=0){
        return a.toString(2);
    }
    else{
        a+=1
        a=a.toString(2).slice(1)
        left=dtype-a.length;
        let answer=""
        for(var i = 0 ;i<left;i++){
            answer+='0';
        }
        answer+=a;
        return flip(answer);
    }
}
function binBits(a,dtype=64){
    if(a>=0){
        var string=a.toString(2);
        var string2=""
        for(var i=0;i<dtype-string.length;i++){
            string2+="0"
        }
        return string2+string;
    }
    else{
        a+=1
        a=a.toString(2).slice(1)
        left=dtype-a.length;
        let answer=""
        for(var i = 0 ;i<left;i++){
            answer+='0';
        }
        answer+=a;
        return flip(answer);
    }
}
function count(a,string){counter=0;for(var i of a){if(i==string){counter++;}}return counter;}
function choiceArrByString(arr,string){
    let answer=[]
    for(var i=0;i<arr.length;i++){
        if(string[i]=='1'){
            answer.push(arr[i])
        }
    }
    return answer;
}
function arraytostring(array){
    string="";
    for(var i=0;i<array.length;i++){
        string+=array[i]+" ";
    }
    return string;
}

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
    [a[pnt], a[pnt2]]=[a[pnt2],a[pnt]]
    reversearr(a,pnt+1)
    return 1;
}
function combinations(given_arr,given_length){
    var out=""
    var mina=2**given_arr.length-1
    var counter=0
    for(var i=mina;i>=1;i--){
        counter++;
        if(counter==10**6){return out}
        var selector=binBits(i,dtype=given_arr.length)
        if(count(selector,'1')==given_length){
            out+=arraytostring(choiceArrByString(given_arr,selector))+"<br>"
        }
    }
    return out
}

function permutations(given_arr,given_length=undefined){
    if(given_length==undefined){given_length=given_arr.length}
    var out=""
    var outs=[]
    var mina=2**given_arr.length-1
    var counter=0
    var fac=1;
    for(var i=1;i<=given_length;i++){fac*=i;}
    for(var i=0;i<fac;i++){outs.push("")}
    for(var i=mina;i>=1;i--){
        counter++;
        if(counter==10**6){return out}
        var selector=binBits(i,dtype=given_arr.length)
        if(count(selector,'1')==given_length){
            var temparr=choiceArrByString(given_arr,selector)
            for(var j=0;j<fac;j++){
                // out+=arraytostring(temparr)+"<br>"
                outs[j]+=arraytostring(temparr)+"<br>";
                next_permutation(temparr)

            }
        }
    }
    for(var i=0;i<outs.length;i++){
        out+=outs[i];
    }
    return out
}
arr=[1,2,3]
lena=2
arr=permutations(arr)
console.log(arr)