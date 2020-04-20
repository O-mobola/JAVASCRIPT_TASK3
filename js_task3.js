
//define a function stringReplace

function stringReplace (number) {

  //declare an empty array and a variable
    let x, y, z;
    x = "yu";
    y = "gi";
    z = "oh";
    let hold = [];
  //the count in number
  
  for(let count=0; count <= number; count++) {
    //check conditions
    if(number%2 === 0) {
    count = x;
    }
    else if(number%3 === 0) {
     count= y;
    }
    else if(number%5 === 0) {
     count = z;
    }
    else if(number%2 ===0 && number%3 === 0) {
     count= (x+"-"+y);
    }
    else if(number%2 ===0 && number%3 === 0 && number%5 === 0) {
      count= (x+"-"+y+"-"+z);
    }
    else {
      count;
    }
    //push count into array hold
    hold.push(count);
  }
  
  console.log(hold);
  return hold;
}
stringReplace(100);
stringReplace(9);