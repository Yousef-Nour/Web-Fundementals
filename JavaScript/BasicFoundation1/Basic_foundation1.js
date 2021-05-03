//Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.
function buildArray() {
    var arr = [];
    for (var i=1; i<=255; i++){
        arr.push(i);
    }
    
    return arr;
}
//Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.
function sum_even(){
    var sum=0;
    for(var i=1;i<=1000;i++){
        if(i%2==0)
        sum=sum+i;
    }
    return sum;
}
console.log(sum_even());

//Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000.
function sum_odd(){
    var sum=0;
    for(var i=1;i<=5000;i++){
        if(i%2!= 0)
        sum=sum+i;
    }
    return sum;
}
console.log(sum_odd());
// console.log(sum_odd());


//Iterate an array - Write a function that returns the sum of all the values within an array.

function iterate_array(){
    var sum=0;
    for(i=0;i<arr.length;i++){
        sum=arr[i]+sum;
    }
    return sum;
}
// console.log(iterateArr([5,4,7,9,2,5]));

//Find max - Given an array with multiple values, write a function that returns the maximum number in the array.
function findMax(arr) {
    var max = arr[0];
    for(var i=1;i<arr.length;i++){
        if (max < arr[i]){
            max = arr[i];
        }
    }
    return max
}

//Find average - Given an array with multiple values, write a function that returns the average of the values in the array. 
function findAvg(arr) { 
    var avg=0;
    var sum=0;
    for(var i=0; i<arr.length; i++){
        sum=arr[i]+sum;
        avg= sum/arr.length;
    }
    return avg; 
}

//Array odd - Write a function that would return an array of all the odd numbers between 1 to 50.
function oddNumbers() {
    var arr = [];
    var i=1;
    while(i<=50){
        if(i%2==1){
            arr.push(i);
        }
        i++;
    }
    return arr; 
}

//Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y.
function greaterY(arr, Y) {
    var count=0;
    for (var i=0; i<arr.length; i++){
        if(arr[i]>Y){
            count++;
        }
    }
    return count; 
}

//Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself.
function square(arr) {
  for(var i = 0; i < arr.length; i++){
   
    arr[i]=arr[i]*arr[i];
  }
  return arr;
}
console.log(square(arr));

//Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0.
// When the program is done the array should contain no negative values. 
function noNeg(arr) {
    for(var i=0; i<arr.length; i++){
        if (arr[i]<0){
            arr[i]=0;
        }
    }
    return arr; 
}

//Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array.
function maxMinAvg(arr) {
    var max=arr[0];
    var min=arr[0];
    var sum=arr[0];
    for (var i=1; i<arr.length; i++){
        if (arr[i]>max){
            max= arr[i];
        }
        if (arr[i]<min){
            min=arr[i];
        }
        sum=sum+arr[i];
        }
     var arrnew=[max,min,sum/arr.length];
    
    return arrnew; 
}

//Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2.
function swap(arr) {
      var x=arr[0];
      arr[0]=arr[arr.length-1];
      arr[arr.length-1]=x; 
   
    return arr; 
}

//Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'.
function numToStr(arr) {
    for(var i=0; i<arr.length; i++){
        if (arr[i]<0){
            arr[i]="Dojo"
        }
    }
    return arr; 
}
