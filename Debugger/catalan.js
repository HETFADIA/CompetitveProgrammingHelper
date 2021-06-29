ans=1n;
ans.ob
catalanarr=[]
function nthCatalan(n){
    if(n==0){
        return 1;
    }
    catalanarr=[]
    for(var i=0;i<=n;i++){
        catalanarr.push(1);
    }
    for(var i=1;i<=n;i++){
        if(1){

            catalanarr[i]=BigInt(catalanarr[i-1])*BigInt(2n*(2n*BigInt(i)+1n))/(BigInt(i)+2n);
        }
    }
    return catalanarr[n-1]
}
var n=30000;
answer=nthCatalan(n);
answer=answer.toString()
console.log(answer)
if(answer.length==1){
    console.log(answer.slice(0,2)+"e+"+(answer.length-1))
}
else if(answer.length>=2){
    console.log(answer.slice(0,2)+"e+"+(answer.length-2))
}

