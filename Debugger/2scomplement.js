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
console.log(twosComplement(-100))