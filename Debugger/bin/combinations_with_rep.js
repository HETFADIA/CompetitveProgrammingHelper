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
function customBase(a,dtype=64,base=b){
    if(a>=0){
        var string=a.toString(base);
        var string2=""
        for(var i=0;i<dtype-string.length;i++){
            string2+="0"
        }
        return string2+string;
    }
}
console.log(customBase(35,64,36))
function count(a,string){counter=0;for(var i of a){if(i==string){counter++;}}return counter;}
function sumOfString(a,base=2){counter=0;for(var i of a){counter+=parseInt(i,base)}return counter}
console.log(sumOfString("12f",16))
function choiceArrByString(arr,string,base=2){
    let answer=[]
    for(var i=0;i<arr.length;i++){
        var repeat=parseInt(string[i],base)
        for(var j=0;j<repeat;j++){
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
function combinations_with_replacement(given_arr,given_length=undefined){
    if(given_length==undefined){given_length=given_arr.length}
    var out=""
    var mina=(given_length+1)**given_arr.length-1
    var counter=0
    for(var i=mina;i>=1;i--){
        counter++;
        if(counter==10**6){return out}
        var selector=customBase(i,dtype=given_arr.length,base=given_length+1)
        if(sumOfString(selector,given_length+1)==given_length){
            out+=arraytostring(choiceArrByString(given_arr,selector,base=given_length+1))+"<br>"
        }
    }
    return out
}
arr=[1,2,3,4,5]
lena=3
arr=combinations_with_replacement(arr,lena)
console.log(arr)