function range(start,stop=-1.1,step=1){
    if(stop==-1.1){
        stop=start;
        start=0;
    }
    let arr=[];
    for(i=start;i<stop;i+=step){
        arr.push(i);
        // yield i;
    }
    return arr;
}

for(var i in range(10)){
    console.log(i)
}