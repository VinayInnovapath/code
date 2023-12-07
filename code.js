// var a = 10
// var b =20 
// var c = (a*b)/2
// console.log(c);
// ---------------------------------------------------------------------
// Swapping 2 values 
 
// 1) with temporary varubale 
        // var a = 10;
        // var b =20 ;
        // console.log(`${a} ${b}`);
        // var temp = a 
        // var a = b ;
        // var b = temp;
        // console.log(`${a} ${b}`);
        
// 2) without temporary variable 
// var a = 10 
// var b = 20 
// a = a+b
// b=a-b
// a=a-b
// console.log(`${a} ${b}`);
// ---------------------------------------------------------------------------

// postive or negative or zero 

// var a = -0 

// if(a === 0){
//     console.log('Zero');
// }
// else if (a>0){
//     console.log('positive')
// }
// else{
//     console.log('negative');
// }
// ------------------------------------------------
//Generate a random number 

// var x = Math.random();
// console.log(x);

//Get a random number between a range

// formula = Math.random() * (highestNumber - lowestNumber) + lowestNumber 

// var x = Math.random()* (100-20) + 20
// console.log(x);

// To get a interger instead of float 

// let a = Math.floor(Math.random() * (10 - 1)) + 1; 
// console.log(a)
// ---------------------------------------------------------------

// even or odd 

// var a = 6
// if(a%2 === 0){
//     console.log('even');
// }else {
//     console.log('odd ');
// }

// using ternary operator 

// var b= a%2 == 0 ? "even" : "odd"
// console.log(b);

//  -----------------------------------------------------------------
// largest of three numbers 

// var a =10 ;
// var b =200 
// var c = 30 
// var d = Math.max(a,b,c)
// console.log(d);

// if(a>b&&a>c){
//     console.log(a);
// } else if (b>a && b>c){
//     console.log(b);
// }
// else{
//     console.log(c);
// }
// ---------------------------------------------------------------------

// factorial 
// var a;
// var fact = 10
// if(a === 0){
//      console.log('0');
// }else if(a<1){
//     console.log('not possible');
// }else {
//     for (var i = 0;i<a;i++){
//         fact = fact*i;
//         console.log(a);
//     }
//     // console.log(a);
// }

// ------------------------------------------------------------------------------------
// removing duplicates

// let arr = [1,2,3,4,12,1]
// let unqarr = arr.filter((value,index,self)=>{
//     return self.indexOf(value) === index
// })
// console.log(unqarr);

// ---------------------------------------------------------------

// add two arrays 

// let a = [1,2,3,4]
// let b = [5,6,7,8]

// let comb = [...a,...b]
// console.log(comb);

// ----------------------------------------------------------------------

// biggest number in an array 

// function findmax(arr){
//     return Math.max(...arr)
// }

// let num = [1,3,4,6,2]
// let maxnum = findmax(num)
// console.log(maxnum);

// let num = [1,3,6,2]
// let maxnum = Math.max(...num)
// console.log(maxnum);

// --------------------------------------------------------------------------------

// sum of array elements 

// const sum = (arr) =>{
//     return arr.reduce((acc,curr)=>acc+curr,0)
// }
// let nums = [2,3,45,6]
// let tot = sum(nums)
// console.log(tot);

// ----------------------------------------------------------------------

// reverse an array 

// function reverse (arr){
//     return arr.slice().reverse()
// }

// let num = [1,2,3,4]
// let tot = reverse(num)
// console.log(tot);

//- -------------------------------------------------------------------------------

//  Check if Array Contains a Specific Element

// function check (array , element) {
//     return array.includes(element)
// }

// let arr = [1,2,4,5]
// let tot = check(arr , 7)
// console.log(tot);

// -------------------------------------------------------------------------------

// 6. Remove Specific Element from an Array

// function removedelement(array, element) {
//     return array.filter(item => item !== element)
// }

// let arr = [1,2,4,5]
// let rem = 4
// let tot = removedelement(arr, rem)
// console.log(tot);

// ------------------------------------------------------------------------

// show removed element 
 
// let arr = [1,2,3,4]
// let removed = arr.splice(1,1)[0]
// console.log(removed);

// ------------------------------------------------------------------------ 

// add element in middle of array 

