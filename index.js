//1. Write a JavaScript program to sum the multiples of 3 and 5 under 1000.

let sum = 0;

for(let i = 0; i <= 1000; i++){
    
    if(i % 3 == 0){
      sum += i;
      
    } else if(i % 5 == 0){
        sum += i
    }
}

alert("The Sum of multiples of 5 and 3 under 1000 are: " + sum);


// 2. Write a JavaScript program which accepts a number as input and inserts dashes (-) between each two even numbers. 
// For example if you accept 025468 the output should be 0-254-6-8.

let userInput = prompt("Input Number");
let userArr = userInput.split("");
let resultantArr = [];

for(let i = 0; i < userArr.length; i++){
    
    if(userArr[i] % 2 == 0 && userArr[i + 1] % 2 == 0){
        resultantArr.push(userArr[i]);
        resultantArr.push("-");
    } else {
        resultantArr.push(userArr[i]);
    }
    
};

alert(resultantArr.join(""));

//3. Write a JavaScript program that accepts an array input from a user and finds the most frequent item in the array.
// Sample array : const arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )

function frequencyFinder(arr){
    let count;
    for(let i = 0; i < arr.length; i++){
        count = 0;
        for(let j = 0; j < arr.length; j++){
            if(arr[j] == arr[i]){
                count++;
            } 
        }
        alert(arr[i] + " appears " + count + " times!");
    }
    
}

let userArray = prompt("Please type in the Array");

let myArray = userArray.split("");

frequencyFinder(myArray);