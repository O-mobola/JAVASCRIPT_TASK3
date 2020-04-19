
//define a function stringReplace

function stringReplace (number) {

  //declare an empty array and a variable
    let x, y, z, a;
    x = "yu";
    y = "gi";
    z = "oh";
    let hold = [];
    let hold2 = [];
  //the count in number
  
  for(let count=1; count<number; count++) {
    //check conditions
    if(number%2 === 0) {
    count = x;
    a = count;
    }
    else if(number%3 === 0) {
     count= y;
     a = count;
    }
    else if(number%5 === 0) {
     count = z;
     a = count;
    }
    else if(number%2 ===0 && number%3 === 0) {
     count= (x+"-"+y);
     a = count;
    }
    else if(number%2 ===0 && number%3 === 0 && number%5 === 0) {
      count= (x+"-"+y+"-"+z);
      a = count;
    }
    else {
      count[number];
    }
    hold.push(a);
  }
  //push count into array hold2
  
  console.log(hold);
  return hold;
}
console.log(stringReplace(6));