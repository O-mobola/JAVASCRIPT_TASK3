
//define a function stringReplace

function stringReplace (number) {

  //declare an empty array and a variable
  let x, y, z, ans, ans1, ans2, ans3, ans4, ans5;
    x = "yu";
    y = "gi";
    z = "oh";
  let hold = [];
  let hold2 = [];
  //the count in number
  
  for(var count=1; count<=number; count++) {
    //check conditions
    
    if(number%2 === 0) {
     count = x;
    //console.log(hold);
    }
    else if(number%3 === 0) {
     count= y;
hold[hold.length] += count;
    }
    else if(number%5 === 0) {
     count = z;
hold[hold.length] = count;
    }
    else if(number%2 ===0 && number%3 === 0) {
     count= x-y;
hold[hold.length] = x-y;
    }
    else if(number[count]%2 ===0 && number[count]%3 === 0 && number[count]%5 === 0) {
      count= x-y-z;
    }
    else {
      number;
    }
    hold.push(count);
  }
  //push count into array hold
    console.log(hold);
    return hold;
}
    
console.log(stringReplace(100));