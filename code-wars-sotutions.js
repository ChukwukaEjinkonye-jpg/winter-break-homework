// Copy/Paste you solutions below. Each solution should be accompanied by a multiline comment explaining the solution.

//1. Multiples of 3 and 5
function solution(number){
  var sum = 0;
  for (var i = 0; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  return sum;
}

//2. Who likes it?
function likes(names) {
  if(names.length == 0){
    return "no one likes this"
  }else if(names.length == 1){
    return names[0] + " likes this"
  }else if(names.length == 2){
    return names[0] + " and " + names[1] + " like this"
  }else if(names.length == 3){
    return names[0] + ", " + names[1] + " and " + names[2] + " like this"
  }else if (names.length > 3){
    number = names.length - 2
    return names[0] + ", " + names[1] + ` and ${number} others like this`
  }
}

//3. Find the unique number
function findUniq(arr) {
  arr.sort(function(a, b){return a - b})
  if(arr[0] == arr[1]){
    return arr[arr.length - 1]
  }else{
    return arr[0]
  }
}

//4. Find the parity outlier
function findOutlier(integers){
  let even = integers.filter(x => x%2 == 0);
  let odd = integers.filter(x => x%2 != 0);
  return even.length == 1? even[0] : odd[0]
}

//5. Counting Duplicates
function duplicateCount(text){
  let letters = text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || [];
  return letters.length
}

//6. Moving Zeros To The End
function moveZeros(arr){
  let non_zero = arr.filter(x => x !== 0)
  let zero = arr.filter(x => x === 0)
  return non_zero.concat(zero)
}

//7. Simple Pig Latinfunction pigIt(string){
  let words = string.split(" ")
  let pigLatin = []
  for(let i = 0; i < words.length; i++){
    if(/[^a-zA-Z]/g.test(words[i])){
      pigLatin.push(words[i])
    }else{
      pigLatin.push(words[i].substring(1,words[i].length) + words[i][0] + "ay")
    }
  }
  return pigLatin.join(" ")
}
