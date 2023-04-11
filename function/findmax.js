function findmax(){
    var i;
    var max=-Infinity;
    for(i=0;i<arguments.length;i++){
        if(arguments[i]>max){
            max=arguments[i];
        }
    }
    return max
}
var x=findmax(2,70,8,10,45,3,8,98);
console.log(x);