var copyText="";
function updatecolor(string){
    document.getElementById(string).style.color="blue";
}
function updatefont(string){
    document.getElementById(string).style.fontFamily="verdana";
}
function beautify(string){
    updatecolor(string);
    updatefont(string);
}
function sin(a) { return Math.sin(a) };
function cos(a) { return Math.cos(a) };
function tan(a) { return Math.tan(a) };
function sqrt(a) { return Math.sqrt(a) };
function cbrt(a) { return Math.cbrt(a) };
function log(a) { return Math.log(a) };
function log2(a) { return Math.log2(a) };
function log10(a) { return Math.log10(a) };
function pow(a, b) { return Math.pow(a, b) };
function exp(a) { return Math.exp(a) };
pi=Math.pi;
PI=Math.PI;
e=Math.E;
function sieveOfErantosthenes(n,start=2) {
    var array = [], upperLimit = Math.sqrt(n), output = [];
    for (var i = 0; i < n; i++) {
        array.push(true);
    }

    for (var i = 2; i <= upperLimit; i++) {
        if (array[i]) {
            for (var j = i * i; j < n; j += i) {
                array[j] = false;
            }
        }
    }
    for (var i = Math.max(start,2); i < n; i++) {
        if(array[i]) {
            output.push(i);
        }
    }

    return output;
};
var spf=[0,1];
function sievePF(n){
    if(spf.length>=n){
        return;
    }
    spf=[0,1]
    var upperLimit = Math.sqrt(n);
    for (var i = 2; i < n; i++) {
        spf.push(i);
    }
    for(var i=4;i<n;i+=2){
        spf[i]=2;
    }

    for (var i = 3; i <= upperLimit; i++) {
        if (spf[i]==i) {
            for (var j = i * i; j < n; j += i) {
                if(spf[j]==j){
                    spf[j]=i;
                }
            }
        }
    }
}
function getFactorization(x){

    var ret = []
    while (x != 1){

        ret.push(spf[x])
        x = x/spf[x]
    }
    
    return ret
}
function normalFactorization(n){
    var ret=[]
    while (n%2==0){
        ret.push(2);
        n/=2;
    }
    for(var i=3;i<Math.sqrt(n);i+=2){
        while (n%i==0){
            ret.push(i);
            n/=i;
        }
    }
    return ret;
}
function random(a,b){
    let minimum=a;
    let difference=b-a;
    return Math.floor(minimum+Math.random()*difference);
}
function generate(){
    
    var arraysize = eval(document.getElementById("arraySize").value);
    var minValue=eval(document.getElementById("minValue").value);
    var maxValue=eval(document.getElementById("maxValue").value+1);
    
    first="";
    second="[";
    for(let i=0;i<arraysize;i++){
        let value=random(minValue,maxValue)
        first+=value+" ";

        if(i!=arraysize-1){
            second+=value+", ";
        }
        else{
            second+=value;
        }
    }
    second+="]";
    document.getElementById("myInput").innerHTML=first;
    document.getElementById("myInput1").innerHTML=second;
    beautify("myInput");
    beautify("myInput1");
    
}
function resetarray(){
    document.getElementsByClassName("Array")[0].innerHTML="";
    document.getElementsByClassName("Array")[1].innerHTML="";
}
function Permutation(n){
    var arr=[]
    for(var i=1;i<=n;i++){
        arr.push(i);
    }
    for(var i=0;i<n;i++){
        index=random(0,n);
        [arr[i],arr[index]]=[arr[index],arr[i]]
    }
    string="";
    for(var i=0;i<n;i++){
        string += arr[i]+" ";
    }
    document.getElementById("outPermutation").innerHTML=string;
    beautify("outPermutation");
}
function resetPermutation(){
    document.getElementsByClassName("Permutation")[0].innerHTML="";
}
function generatePermutation(){
    var n=eval(document.getElementById("permutation").value);
    Permutation(n);
}
function isPrime(n){
    if(n<0){
        return 0;
    }
    var sqrta=Math.sqrt(n);
    if(n<=2){
        return n==2;
    }
    if(n%2==0){
        return 0;
    }
    for(var i=3;i<=sqrta;i+=2){
        if(n%i==0){
            return 0;
        }
    }
    return 1;
}
function GeneratePrevPrime(){
    var num=eval(document.getElementById("numberForPrevPrime").value);
    var counter=eval(document.getElementById("numberOfPrevPrime").value);
    var arr=[]
    for(var i=num;i>=2;i--){
        if(isPrime(i)){
            arr.push(i);
            counter--;
        }
        if(counter==0){
            break;
        }
    }
    arr.reverse();
    var string="";
    for(var i=0;i<arr.length;i++){
        string+=arr[i];
        string+="  ";
    }
    document.getElementById("PrevPrimes").innerHTML=string;
    beautify("PrevPrimes");
}
function GenerateNextPrime(){
    var num=eval(document.getElementById("numberForNextPrime").value);
    var counter=eval(document.getElementById("numberOfNextPrime").value);
    var arr=[]
    if(num<0){
        num=0;
    }
    for(var i=num;;i++){
        if(isPrime(i)){
            arr.push(i);
            counter--;
        }
        if(counter==0){
            break;
        }
    }

    var string="";
    for(var i=0;i<arr.length;i++){
        string+=arr[i];
        string+="  ";
    }
    document.getElementById("NextPrimes").innerHTML=string;
    beautify("NextPrimes");
}
function GeneratePrimesInRange(){
    var start=eval(document.getElementById("startnumber").value);
    var end=eval(document.getElementById("endnumber").value);
    if(start<0){
        start=1;
    }
    if (end>1){
        sievetime=end*Math.log(Math.log(end));
    }
    else{
        sievetime=0;
    }
    if(end>=0){
        normaltime=Math.sqrt(end)*(end-start);
    }
    else{
        normaltime=0;
    }
    if(sievetime<=normaltime){
        var arr=sieveOfErantosthenes(end+1,start);
    }
    else{
        var arr=[];
        for(var i=start;i<=end;i++){
            if(isPrime(i)){
                arr.push(i);
            }
        }
    }
    var string="";
    for(var i=0;i<arr.length;i++){
        string+=arr[i];
        string+="  ";
    }
    var countprimes
    if(arr.length>1){

        countprimes="The number of the primes in the range are " +arr.length;
    }
    else{
        countprimes="The number of the primes in the range is " +arr.length;
    }
    document.getElementById("numberOfPrimesInRange").innerHTML=countprimes;
    document.getElementById("PrimesInRange").innerHTML=string;
    beautify("numberOfPrimesInRange");
    beautify("PrimesInRange");
}
function CountPrimesInRange(){
    var start=eval(document.getElementById("startnumberPrimeCount").value);
    var end=eval(document.getElementById("endnumberPrimeCount").value);
    if(start<0){
        start=1;
    }
    var sievetime,normaltime;
    if (end>1){
        sievetime=end*Math.log(Math.log(end));
    }
    else{
        sievetime=0;
    }
    if(end>=0){
        normaltime=Math.sqrt(end)*(end-start);
    }
    else{
        normaltime=0;
    }
    console.log(sievetime,normaltime);
    if(sievetime<=normaltime){
        var arr=sieveOfErantosthenes(end+1,start);
        
    }
    else{
        var arr=[];
        for(var i=start;i<=end;i++){
            if(isPrime(i)){
                arr.push(i);
            }
        }
    }
    var countprimes;
    if(arr.length>1){
        countprimes="The number of the primes in the range are " +arr.length;
    }
    else{
        countprimes="The number of the primes in the range is " +arr.length;
    }
    document.getElementById("countnumberOfPrimesInRange").innerHTML=countprimes;
    beautify("countnumberOfPrimesInRange");
}
function spfPrimesInRange(){
    var start=eval(document.getElementById("startnumberspf").value);
    var end=eval(document.getElementById("endnumberspf").value);
    
    if(start<=0){
        start=1;
    }
    if(end<=0){
        end=1;
    }
    if(start>end){
        return;
    }
    var spftime=end*Math.log(end);
    var normaltime=(end-start)*Math.sqrt(end);
    console.log(start);
    console.log(spftime,normaltime);
    if(spftime<=normaltime){
        sievePF(end+1);
        var out="Number-> Prime Factors of the Number"+"<br>";

        var stringofarr="";
        for(var i=start;i<=end;i++){
            var primefactors=getFactorization(i);
            stringofarr="";
            for(var j=0;j<primefactors.length;j++){
                stringofarr+=primefactors[j]+" ";
            }
            out+=i+" -> "+stringofarr+"<br>";

        }
        document.getElementById("spfInRange").innerHTML=out;
    }
    else{
        var out="Number-> Prime Factors of the Number"+"<br>";

        var stringofarr="";
        for(var i=start;i<=end;i++){
            var primefactors=normalFactorization(i);
            stringofarr="";
            for(var j=0;j<primefactors.length;j++){
                stringofarr+=primefactors[j]+" ";
            }
            out+=i+" -> "+stringofarr+"<br>";

        }
        document.getElementById("spfInRange").innerHTML=out;
    }
    beautify("spfInRange");

}
function resetspfPrimesInRange(){
    document.getElementById("spfInRange").innerHTML="";
}
function resetCountInRange(){
    document.getElementById("countnumberOfPrimesInRange").innerHTML="";
}
function resetPrimesInRange(){
    document.getElementById("numberOfPrimesInRange").innerHTML="";
    document.getElementById("PrimesInRange").innerHTML="";
}
function resetPrevPrime(){
    document.getElementById("PrevPrimes").innerHTML="";
}
function resetNextPrime(){
    document.getElementById("NextPrimes").innerHTML="";
}
function time(input,output,loop,inputspeed,outputspeed,loopspeed){
    return input/inputspeed+output/outputspeed+loop/loopspeed;
}
function pow(a,b){
    return Math.pow(a,b);
}
function calculate(){
    var input = eval(document.getElementById("inputSize").value);
    var output=eval(document.getElementById("outputSize").value);
    var loop=eval(document.getElementById("loop").value);
    var tcpp=time(input,output,loop,8*1e6,2*1e6,5*1e8).toFixed(3)
    var tpy=time(input,output,loop,1e6,9*1e5,1e7).toFixed(3)
    var tpypy=time(input,output,loop,1e6,3*1e5,4*1e8).toFixed(3)

    document.getElementById("time").innerHTML="Time for "+input+" input, "+output+" output and "+loop+" loop in "+"<br>"
    document.getElementById("time").innerHTML+="C++17(fastio) is "+tcpp+"s"+"<br>";
    document.getElementById("time").innerHTML+="Python3(fastio) is "+tpy+"s"+"<br>";
    document.getElementById("time").innerHTML+="Pypy3(fastio) is "+tpypy+"s"+"<br>";
    beautify("time");
}
function resettime(){
    string="Time Taken for Cpp+17: 0s"+
        "<br>"+
        "Time Taken for Python3: 0s"+
        "<br>"+
        "Time Taken for Pypy3: 0s"
    document.getElementById("time").innerHTML=string;
    beautify("time");
}
function CopyToClipboard(id)
{
    var r = document.createRange();
    r.selectNode(document.getElementById(id));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
}