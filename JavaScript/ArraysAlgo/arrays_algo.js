//Challenge 1: Print values and sum
var arr= [6,3,5,1,2,4];
var sum=0;
for(var num=0;num<arr.length;num++){
    sum=arr[num]+sum;
    console.log("Num:"+arr[num]+","+" "+"Sum"+sum);

}
// Num:6, Sum6
// Num:3, Sum9
// Num:5, Sum14
// Num:1, Sum15
// Num:2, Sum17
// Num:4, Sum21

//Challenge 2: Value * Position
var arr= [6,3,5,1,2,4];
var temp=[];
var sum=0;
for(var i=0;i<arr.length;i++){
    temp[i]=arr[i]*i;

}
console.log(temp);
//[ 0, 3, 10, 3, 8, 20 ]