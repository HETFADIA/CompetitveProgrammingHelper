var copyText="";
function random(a,b){
    let minimum=a;
    let difference=b-a;
    return Math.floor(minimum+Math.random()*difference);
}
function generate(){
    
    var arraysize = +document.getElementById("arraySize").value;
    var minValue=+document.getElementById("minValue").value;
    var maxValue=+document.getElementById("maxValue").value;
    
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
    document.getElementsByClassName("Array")[0].innerHTML=first;
    document.getElementsByClassName("Array")[1].innerHTML=second;
    
    
}
function resetarray(){
    document.getElementsByClassName("Array")[0].innerHTML="";
    document.getElementsByClassName("Array")[1].innerHTML="";
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
    var tcpp=time(input,output,loop,5*1e6,1e6,5*1e8).toFixed(2)
    var tpy=time(input,output,loop,1e6,5*1e5,5*1e6).toFixed(2)
    var tpypy=time(input,output,loop,1e6,2*1e5,1e8).toFixed(2)
    var tpybig=(tpypy*3).toFixed(2)
    document.getElementById("time").innerHTML="Time for "+input+" input, "+output+" output and "+loop+" loop in "+"<br>"
    document.getElementById("time").innerHTML+="cpp(fastio) is "+tcpp+"s"+"<br>";
    document.getElementById("time").innerHTML+="python(fastio) is "+tpy+"s"+"<br>";
    document.getElementById("time").innerHTML+="pypy(bigint and fastio) is "+tpybig+"s"+"<br>";
    document.getElementById("time").innerHTML+="pypy(fastio) is "+tpypy+"s"+"<br>";
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