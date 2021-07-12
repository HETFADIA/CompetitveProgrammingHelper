arr=[]
function fun(a){
    if(a>=100){
        return;
    }
    console.log(a)
    arr.push(a)
    fun(a+1)
}
fun(1)
console.log(arr)