const updatecolor=(string)=>{
    document.getElementById(string).style.color="blue";
}
const updatefont=(string)=>{
    document.getElementById(string).style.fontFamily="verdana";
}
const beautify=(string)=>{
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

function exp(a) { return Math.exp(a) };
function bin(a){ return a.toString(2);}
function oct(a){ return a.toString(8);}
function hex(a){return a.toString(16);}
function str(a){ return a.toString()}
function float(a){if(a=="inf"){return Infinity}return parseFloat(a)}
function chr(a){return String.fromCharCode(a)}
function ord(a){return a.codePointAt(0)}
function list(a){var res=[];for(let i=0;i<a.length;i++){res.push(a[i])};return res}
function sum(a){var res=0;for(let i=0;i<a.length;i++){res+=a[i]}return res}
function logbase(a,b){return Math.log(a)/Math.log(b);}
function iterlog(a,base=undefined){
    if(base==undefined){
        base=Math.E;
    }
    let res=0;
    while(a>=1){
        a=logbase(a,base);
        res++;
    }
    return res;
}
function logstar(a,b=undefined){if(b==undefined){b=Math.E}return iterlog(a,b);}
function int(a,b=undefined){
    if(b==undefined){
        return parseInt(a);
    }
    else if(b==0){
        
        if(a.slice(0,2)=='0b'){
            return parseInt(a.slice(2),2)
        }
        else if(a.slice(0,2)=="0x"){
            return parseInt(a.slice(2),16)
        }
        else if(a.slice(0,2)=="0o"){
            console.log("oct")
            return parseInt(a.slice(2),8)
        }
        return parseInt(a,10)
    }
    else{
        return parseInt(a,b);
    }
}
function pow(x,y,mod=undefined){
    if(mod==undefined){
        return Math.pow(x,y);
    }
    var res=1;
    x%=mod;
    if(x==0){return 0}
    while(y){
        if(y&1){
            res=(res*x)%mod;
        }
        y>>=1;
        x=(x*x)%mod;
    }
    return res;
}
function range(start,stop=undefined,step=1){
    if(stop==undefined){
        stop=start;
        start=0;
    }
    let arr=[];
    for(let i=start;i<stop;i+=step){
        arr.push(i);
    }
    return arr;
}
pi=Math.PI;
Pi=Math.PI;
pI=Math.PI;
PI=Math.PI;
e=Math.E;
var arraysieve=[];
function sieveOfErantosthenes(n,start=2) {
    var upperLimit = Math.sqrt(n), output = [];
    if(arraysieve.length<n){
        for (var i = 0; i < n; i++) {
            arraysieve.push(true);
        }
    
        for (var i = 2; i <= upperLimit; i++) {
            if (arraysieve[i]) {
                for (var j = i * i; j < n; j += i) {
                    arraysieve[j] = false;
                }
            }
        }
    }
    else{
        console.log("sieve not run to save time as the arr already exists")
    }
    for (var i = Math.max(start,2); i < n; i++) {
        if(arraysieve[i]) {
            output.push(i);
        }
    }

    return output;
};
var spf=[0,1];
function sievePF(n){
    if(spf.length>=n){
        console.log('spf not run to save time as it already calcualted')
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
    for(var i=3;i<=Math.sqrt(n);i+=2){
        while (n%i==0){
            ret.push(i);
            n/=i;
        }
    }
    if(n>2){
        ret.push(n);
    }
    return ret;
}
function random(a,b){
    let minimum=a;
    let difference=b-a;
    return Math.floor(minimum+Math.random()*difference);
}
function showarray(string){
    document.getElementById("links").style.display="none"
    document.getElementById(string).style.display="block"
    // document.body.style.backgroundImage='url("../img/background/alien.jpg")';
}
function home(string){
    document.getElementById("links").style.display="block"
    document.getElementById(string).style.display="none"
    document.body.style.backgroundImage='none';
}
function generate(){
    
    var arraysize = parseInt(eval(document.getElementById("arraySize").value));
    var minValue=eval(document.getElementById("minValue").value);
    var maxValue=eval(document.getElementById("maxValue").value)+1;
    minValue=parseInt(minValue);
    maxValue=parseInt(maxValue);
    console.log(minValue,maxValue);
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
function generateOneTC(length,valuelow,valuehigh){
    var string="<span class='pinkcolor'>"+length+"</span>"+"<br>";//replace class with nocolor for no color
    // string+="<span class='orangecolor'>"
    for(var i=0;i<length;i++){
        string+=random(valuelow,valuehigh)+" ";
    }
    // string+="</span>"
    string+="<br>"
    return string
}
function TtestCases(TC,low,high,valuelow,valuehigh){
    var string="<span class='redcolor'>"+TC.toString()+"</span>";//replace class with nocolor for no color
    string+="<br>"
    for(var i=0;i<TC;i++){
        string+=generateOneTC(random(low,high),valuelow,valuehigh);

    }
    return string;
}
function genTC(){
    var isChecked=document.getElementById('testCases').checked;
    var TC=5;
    var low=1;// min value of n
    var high=10;// max value of n
    var valuelow=1;// the minimum value of the array of n
    var valuehigh=10;// the max value of array of n
    if(isChecked){
        string=TtestCases(TC,low,high,valuelow,valuehigh);
    }
    else{
        string=generateOneTC(random(low,high),valuelow,valuehigh);
    }
    document.getElementById("tc").innerHTML=string;
    beautify("tc");
}
function resetgenTC(){
    document.getElementById("tc").innerHTML="";
}
function arraytostring(array){
    string="";
    for(var i=0;i<array.length;i++){
        string+=array[i]+" ";
    }
    return string;
}
function split(arr){
    arr=arr.split(" ");
    newarr=[]
    for(var i=0;i<arr.length;i++){
        if(arr[i]!=""){
            newarr.push(arr[i]);
        }
    }
    return newarr;
}
function sortarray(){
    var array=document.getElementById("array").value;

    array=split(array);
    for(var i=0;i<array.length;i++){
        array[i]=eval(array[i]);
    }
    array.sort(function(a,b){return a-b;});

    document.getElementById("sortedout").innerHTML=arraytostring(array);
    array.reverse();
    document.getElementById("revsortedout").innerHTML=arraytostring(array);
}
function zeroone01(n,m){
    let arr=['0','1']
    let res="";
    for(let j=0;j<m;j++){
        for(let i=0;i<n;i++){
            var indexa=random(0,arr.length)
            res+=arr[indexa];
        }
        res+="<br>"
    }
    return res;
}
function stardot(n,m){
    let arr=['.','*']
    let res="";
    for(let j=0;j<m;j++){
        for(let i=0;i<n;i++){
            var indexa=random(0,arr.length)
            res+=arr[indexa];
        }
        res+="<br>"
    }
    return res;
}
function zeronine09(n,m){
    let arr=['0','1','2','3','4','5','6','7','8','9']
    let res="";
    for(let j=0;j<m;j++){
        for(let i=0;i<n;i++){
            var indexa=random(0,arr.length)
            res+=arr[indexa];
        }
        res+="<br>"
    }
    return res;
}
function az(n,m){
    let arr="abcdefghijklmnopqrstuvwxyz"
    let res="";
    for(let j=0;j<m;j++){
        for(let i=0;i<n;i++){
            var indexa=random(0,arr.length)
            res+=arr[indexa];
        }
        res+="<br>"
    }
    return res;
}
function genString(){
    var n=stringsize=document.getElementById("stringSize").value;
    var m=stringwidth=document.getElementById("stringwidth").value;
    console.log(stringsize)
    var type;
    var arrtype=['01','0-9','a-z','*.']
    if(document.getElementById(arrtype[0]).checked){
        type=arrtype[0]
    }
    else if(document.getElementById(arrtype[1]).checked){
        type=arrtype[1]
    }
    else if(document.getElementById(arrtype[2]).checked){
        type=arrtype[2]
    }
    else if(document.getElementById(arrtype[3]).checked){
        type=arrtype[3]
    }
    let outstring="";
    if(type=='01'){
        outstring=zeroone01(n,m);
    }
    else if(type=='0-9'){
        outstring=zeronine09(n,m);
    }
    else if(type=='a-z'){
        outstring=az(n,m);
    }
    else if(type=='*.'){
        outstring=stardot(n,m);
    }
    document.getElementById("string").innerHTML=outstring;

}
function resetgenString(){
    document.getElementById("string").innerHTML=""
}
function resetsortarray(){
    document.getElementById("sortedout").innerHTML="";
    document.getElementById("revsortedout").innerHTML="";
}
function resetarray(){
    document.getElementById("myInput").innerHTML="";
    document.getElementById("myInput1").innerHTML="";
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
    if(Number.isInteger(n)==0){
        return 0;
    }
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
    num=parseInt(num);
    var counter=eval(document.getElementById("numberOfPrevPrime").value);
    counter=parseInt(counter);
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
    num=parseInt(num);
    counter=parseInt(counter);
    console.log(num,counter);
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
    start=parseInt(start);
    end=parseInt(end);
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
    start=parseInt(start);
    end=parseInt(end);
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
    start=parseInt(start);
    end=parseInt(end);
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
function calculate(){
    var input = eval(document.getElementById("inputSize").value);
    var output=eval(document.getElementById("outputSize").value);
    var loop=eval(document.getElementById("loop").value);
    var tcpp=time(input,output,loop,8*1e6,2*1e6,5*1e8).toFixed(3)
    var tpy=time(input,output,loop,1e6,9*1e5,1e7).toFixed(3)
    var tpypy=time(input,output,loop,1e6,3*1e5,4*1e8).toFixed(3)

    var inputr=Math.round(input)
    var outputr=Math.round(output)
    var loopr=Math.round(loop)
    document.getElementById("time").innerHTML="Time for "+inputr+" input, "+outputr+" output and "+loopr+" loops in "+"<br>"
    document.getElementById("time").innerHTML+="C++17(fastio) is "+tcpp+"s"+"<br>";
    document.getElementById("time").innerHTML+="Python3(fastio) is "+tpy+"s"+"<br>";
    document.getElementById("time").innerHTML+="Pypy3(fastio) is "+tpypy+"s"+"<br>";
    beautify("time");
    beautify("memory")
    document.body.style.backgroundImage="none";
}
function myFunction(){
    calculate()
    calculateExpression();
}
function __calculateMemory(sizearray,memory){
    var res=0;
    for(var i=0;i<sizearray.length;i++){
        res+=sizearray[i]*memory[i];
    }

    
    return res;
}
function calculateMemory(){
    var stringarr=["bitsetSize","boolSize","intarraySize","longlongarraySize","__int128_tarraySize","pythontupleSize","pythonlistSize"]
    var bitset = eval(document.getElementById(stringarr[0]).value);
    var bool = eval(document.getElementById(stringarr[1]).value);
    var int = eval(document.getElementById(stringarr[2]).value);
    var ll = eval(document.getElementById(stringarr[3]).value);
    // var int128 = eval(document.getElementById(stringarr[4]).value);
    // var pytuple = eval(document.getElementById(stringarr[5]).value);
    var int128=0;
    var pytuple=0;
    var pylist = eval(document.getElementById(stringarr[6]).value);
    var MemoryLimit=eval(document.getElementById("MemoryLimit").value)
    var ispython=pylist | pytuple;
    console.log(bool)
    var sizearray=[bitset,bool,int,ll,int128,pytuple,pylist]
    var memory=[1/8,1,4,8,16,8,8]
    var MemoryUsedBytes=__calculateMemory(sizearray,memory);
    let string="";
    if(MemoryUsedBytes<10**3){
        string+=`Memory usage is ${MemoryUsedBytes} Bytes<br>`
    }
    else if(MemoryUsedBytes<10**6){
        string+=`Memory usage is ${(MemoryUsedBytes/1000).toPrecision(4)} KB<br>`
    }
    else if(MemoryUsedBytes<10**9){
        string+=`Memory usage is ${(MemoryUsedBytes/10**6).toPrecision(4)} MB<br>`
    }
    else{
        string+=`Memory usage is ${(MemoryUsedBytes/10**9).toPrecision(4)} GB<br>`
    }
    
    
    if(MemoryUsedBytes>=MemoryLimit*10**6){
        string+="Memory Usage is High<br>"
        if(ispython){
            string+="Use bytesArray or bitArray to reduce memory<br>";
        }
        else{
            string+="Use bitset to reduce memory<br>";
        }
    }
    document.getElementById("memory").innerHTML=string;
    beautify("memory")
}
function calculateExpression(){
    console.log(document.getElementById("expression"))
    if(document.getElementById("expression").value==""){
        document.getElementById("sciexp").innerHTML="";
    }
    else{
        var expressionResult = eval(document.getElementById("expression").value);
        document.getElementById("sciexp").innerHTML=expressionResult;
        beautify('sciexp')
    }
}
function resetExp(){
    document.getElementById("expression").value="";
    document.getElementById("sciexp").innerHTML="";
}
function calculateMemoryInfo(){
    var MemoryLimit=eval(document.getElementById("MemoryLimit").value);
    var string="";
    string+=`In a program of ${MemoryLimit} MB Limit you can make<br>`
    string+=`Bitset of max ${(MemoryLimit*10**6*8).toExponential(2)} size or<br>`
    string+=`Bool array of max ${(MemoryLimit*10**6).toExponential(2)} size or<br>`
    string+=`Int array of max ${((MemoryLimit*10**6)/4).toExponential(2)} size or<br>`
    string+=`Long long array of max ${((MemoryLimit*10**6)/8).toExponential(2)} size or<br>`
    string+=`int128 array of max ${((MemoryLimit*10**6)/16).toExponential(2)} size or<br>`
    string+=`Python List of max ${((MemoryLimit*10**6)/8).toExponential(2)} size<br>`
    string+=`Python List of max ${((MemoryLimit*10**6)/8).toExponential(2)} size<br>`
    document.getElementById("memoryinfo").innerHTML=string;
    beautify("memoryinfo");
}
function resetMemory(){
    var stringarr=["bitsetSize","boolSize","intarraySize","longlongarraySize","__int128_tarraySize","pythontupleSize","pythonlistSize"]
    for(var i=0;i<stringarr.length;i++){
        document.getElementById(stringarr[i]).value=0
    }
    document.getElementById("memory").innerHTML="Memory usage is 0 KB";
    document.getElementById("memoryinfo").innerHTML="";
    beautify("memory");

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
function printTreeEdges(prufier){
    var m=prufier.length;
    var vertices=m+2;
    var vertex_set=[];
    var tree=[];
    for(var i=0;i<vertices;i++){
        vertex_set.push(0);
    }
    for(var i=0;i<m;i++){
        vertex_set[prufier[i]-1]+=1;
    }
    var j=0;
    for(var i=0;i<m;i++){
        for(var j=0;j<vertices;j++){
            if(vertex_set[j]==0){
                vertex_set[j]=-1;
                tree.push([j+1,prufier[i]]);
                vertex_set[prufier[i]-1]--;
                break;
            }
        }
    }
    var j=0;
    var last=[];
    for(var i=0;i<vertices;i++){
        if(vertex_set[i]==0 && j==0){
            last.push(i+1);
            j++;
        }
        else if(vertex_set[i]==0 && j==1){
            last.push(i+1);
        }
    }
    tree.push(last);
    return tree;
}
function generateRandomTree(){
    var n=eval(document.getElementById("startnumbertree").value);
    var arr=[];
    for(var i=0;i<n-2;i++){
        var randomnumber=random(1,n+1);
        arr.push(randomnumber);
    }
    tree=printTreeEdges(arr);
    outstring="";
    for(var i=0;i<n-1;i++){
        outstring+=tree[i][0]+" "+tree[i][1]+"<br>";
    }
    document.getElementById("tree").innerHTML=outstring;
    beautify("tree");
}
function resetRandomTree(){
    document.getElementById("tree").innerHTML="";
}
var catalanarr=[]
function verybigcatalan(n){
    let start=1n;
    for(var i=1;i<=n;i++){
        start=(start*(2n*(2n*BigInt(i-1)+1n)))/(BigInt(i-1)+2n)
    }
    return start;
}
function nthCatalan(n){
    if(n==0){
        return 1;
    }
    if(n>7*1e4){
        return verybigcatalan(n);
    }
    let start=catalanarr.length;
    for(var i=start;i<=n;i++){
        catalanarr.push(1);
    }
    if(start==0){start++;}
    for(var i=start;i<=n;i++){
        if(n<=500){

            catalanarr[i]=catalanarr[i-1]*(2*(2*i+1))/(i+2)
        }
        else{
            catalanarr[i]=BigInt(catalanarr[i-1])*BigInt(2n*(2n*BigInt(i)+1n))/(BigInt(i)+2n);
        }
    }
    return catalanarr[n-1]
}
function generateCatalan(){
    var n=eval(document.getElementById("catalanNumber").value);
    n=parseInt(n);
    result=nthCatalan(n);
    if(typeof result=="bigint"){
        result=result.toString();
        result=result.slice(0,1)+"."+result.slice(1,6)+"e+"+(result.length-1)
    }
    document.getElementById("catalan").innerHTML=result;
    beautify("catalan")
}
function resetCatalan(){
    document.getElementById("catalan").innerHTML="";
}
document.getElementById("permutation")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("genPermutation").click();
    }
});
document.getElementById("MemoryLimit")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("calcMem").click();
    }
});
document.getElementById("expression")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("expcalc").click();
    }
});
