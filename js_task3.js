
//define a function stringReplace

function stringReplace (number) {

  //declare an empty array and  variables
    let x, y, z,store;
    x = "yu";
    y = "gi";
    z = "oh";
    let hold = [];
 
  //the count in number to initiate the loop
  for(let count=1; count <= number; count++) {
  
  //check conditions
    if(count%2 === 0 && count%3 === 0 && count%5 === 0) {
     store= (x+"-"+y+"-"+z);
    }
    else if(count%2 === 0 && count%3 === 0) {
     store= (x+"-"+y);
    }
    else if(count%2 === 0) {
     store = x;
    }
    else if(count%3 === 0) {
     store = y;
    }
    else if(count%5 === 0) {
      store = z;
    }
    else {
      store = count;
    }
    //push count into array hold
    hold.push(store);
  }
  console.log(hold);
  //return hold;
}
stringReplace(100);
stringReplace(30);