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