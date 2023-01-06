// Copy/Paste you solutions below. Each solution should be accompanied by a multiline comment explaining the solution.

//1. Multiples of 3 and 5
function solution(number){
  var sum = 0;                                                                                //I first create a variable to hold the total amount, named sum 
  for (var i = 0; i < number; i++) {                                                          //I use a for look to iterate between 0 and the given number held in the parameter
    if (i % 3 == 0 || i % 5 == 0) {                                                           //An if statement is used to determine the current number, i, is divisible by either 3 or 5
      sum += i;                                                                               //If the if statement returns true then the current number, i, is added to the overall total
    }
  }
  return sum;                                                                                 //At the end, the total, sum, is returned
}

//2. Who likes it?
function likes(names) {
  if(names.length == 0){                                                                      //An if statement is used to determine if there are no names in the array, names
    return "no one likes this"                                                                //If its true, it returns the given string
  }else if(names.length == 1){                                                                //An if statement is used to determine if there is one name in the array, names
    return names[0] + " likes this"                                                           //If its true, it returns the given string 
  }else if(names.length == 2){                                                                //An if statement is used to determine if there are 2 names in the array, names
    return names[0] + " and " + names[1] + " like this"                                       //If its true, it returns the given string
  }else if(names.length == 3){                                                                //An if statement is used to determine if there are 3 names in the array, names
    return names[0] + ", " + names[1] + " and " + names[2] + " like this"                     //If its true, it returns the given string
  }else if (names.length > 3){                                                                //An if statement is used to determine if there are more than 3 names in the array, name                                                          
    return names[0] + ", " + names[1] + ` and ${names.length - 2} others like this`           //If its true, it returns the given string
  }
}

//3. Find the unique number
function findUniq(arr) {
  arr.sort(function(a, b){return a - b})                                                       //This sorts the numbers in the array, arr, from least to greatest, making our unique number either first or last in our array
  if(arr[0] == arr[1]){                                                                        //This tests if the first and second item in our new array are the same, if they are, then neither are unique
    return arr[arr.length - 1]                                                                 //If the if statement is true then we return the last item in our new array
  }else{
    return arr[0]                                                                              // If the if statement is false then we return the first item in our new array
  }
}

//4. Find the parity outlier
function findOutlier(integers){        
  let even = integers.filter(x => x%2 == 0);                                                   //First, we filter out the array for any numbers that are divisible by 2 and put them in a new array, even
  let odd = integers.filter(x => x%2 != 0);                                                    //Then, we filter out the array for odd numbers that aren't divisible by 2 and put them in another array, odd
  return even.length == 1? even[0] : odd[0]                                                    //We're looking for the array than contains only one element since that is our outlier, so we use if statement to test which one and return the one that has one element
}

//5. Counting Duplicates
function duplicateCount(text){
  let letters = text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || [];        
  return letters.length
}
/*
We take the original text and turn it into lower case. Then we split and sort it so that duplicates can be side by side. We want to use a regex on it so we join it back into a string.
We use a regular expression that looks for any repeating letters that are next to each other and they are put into an array which is then assigned to a variable, letters. 
If there is an empty string or any falsy value, an empty array is assigned to letters instead.
The length of the array, letters is returned.
*/
//6. Moving Zeros To The End
function moveZeros(arr){
  let non_zero = arr.filter(x => x !== 0)                                                       //Filter out all the elements that aren't 0 and put them into an array, non_zero
  let zero = arr.filter(x => x === 0)                                                           //Filter out all the elements that are 0 and put them into another array, zero
  return non_zero.concat(zero)                                                                  //Join the array together into one array where the non zeros are placed first and the zeros are placed last and return it
}

//7. Simple Pig Latin
function pigIt(string){
  let words = string.split(" ")                                                                  //Split the given string into an array of words, words
  let pigLatin = []                                                                              //I create a new array for storing our pig patin in, pigLatin  
  for(let i = 0; i < words.length; i++){                                                         //A for loop is used to iterate between the elements the array, words
    if(/[^a-zA-Z]/g.test(words[i])){                                                             //I use an if statement to test if this is a special character.
      pigLatin.push(words[i])                                                                    //If true, I add it to the array, pigLatin as is
    }else{                                                                                       
      pigLatin.push(words[i].substring(1,words[i].length) + words[i][0] + "ay")                  //If it is an actual word, I modify it by putting the first letter to the end and adding "ay" and pushing it the array pigLatin
    }
  }
  return pigLatin.join(" ")                                                                       //After the for loop is over, I return the array, pigLatin
}
