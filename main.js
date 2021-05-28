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

    document.getElementsByClassName("Array")[0].innerHTML="";
    document.getElementsByClassName("Array")[1].innerHTML="[";
    for(let i=0;i<arraysize;i++){
        let value=random(minValue,maxValue)
        document.getElementsByClassName("Array")[0].innerHTML+=value+" ";

        if(i!=arraysize-1){
            document.getElementsByClassName("Array")[1].innerHTML+=value+", ";
        }
        else{
            document.getElementsByClassName("Array")[1].innerHTML+=value;
        }
    }
    document.getElementsByClassName("Array")[1].innerHTML+="]";

    copyText = document.getElementById("myInput");
    console.log(copyText);
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
    var tpy=time(input,output,loop,1e6,5*1e5,1e7).toFixed(2)
    var tpybig=(tpy*5).toFixed(2)
    var tpypy=time(input,output,loop,1e6,2*1e5,1e8).toFixed(2)
    document.getElementById("time").innerHTML="Time Taken for cpp(fastio): "+tcpp+"s"+"<br>";
    document.getElementById("time").innerHTML+="Time Taken for python(fastio): "+tpy+"s"+"<br>";
    document.getElementById("time").innerHTML+="Time Taken for pypy(bigint and fastio): "+tpypy*5+"s"+"<br>";
    document.getElementById("time").innerHTML+="Time Taken for pypy(fastio): "+tpypy+"s"+"<br>";
}