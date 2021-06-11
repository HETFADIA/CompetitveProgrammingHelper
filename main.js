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


function random(a,b){
    let minimum=a;
    let difference=b-a;
    return Math.floor(minimum+Math.random()*difference);
}
function generate(){
    
    var arraysize = +document.getElementById("arraySize").value;
    var minValue=+document.getElementById("minValue").value;
    var maxValue=+document.getElementById("maxValue").value+1;
    
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
    var n=+document.getElementById("permutation").value;
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
    var num=+document.getElementById("numberForPrevPrime").value;
    var counter=+document.getElementById("numberOfPrevPrime").value;
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
    var num=+document.getElementById("numberForNextPrime").value;
    var counter=+document.getElementById("numberOfNextPrime").value;
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
    var start=+document.getElementById("startnumber").value;
    var end=+document.getElementById("endnumber").value;
    if(start<0){
        start=1;
    }
    var arr=[];
    for(var i=start;i<=end;i++){
        if(isPrime(i)){
            arr.push(i);
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
    var input = +document.getElementById("inputSize").value;
    var output=+document.getElementById("outputSize").value;
    var loop=+document.getElementById("loop").value;
    console.log(loop)
    var tcpp=time(input,output,loop,8*1e6,2*1e6,5*1e8).toFixed(3)
    var tpy=time(input,output,loop,5*1e5,9*1e5,5*1e6).toFixed(3)
    var tpypy=time(input,output,loop,3*1e5,3*1e5,5*1e7).toFixed(3)

    document.getElementById("time").innerHTML="Time for "+input+" input, "+output+" output and "+loop+" loop in "+"<br>"
    document.getElementById("time").innerHTML+="cpp(fastio) is "+tcpp+"s"+"<br>";
    document.getElementById("time").innerHTML+="python(fastio) is "+tpy+"s"+"<br>";
    document.getElementById("time").innerHTML+="pypy(fastio) is "+tpypy+"s"+"<br>";
    beautify("time");
}
function resettime(){
    string="Time Taken for cpp: 0s"+
        "<br>"+
        "Time Taken for python: 0s"+
        "<br>"+
        "Time Taken for pypy: 0s"
    document.getElementById("time").innerHTML=string;
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