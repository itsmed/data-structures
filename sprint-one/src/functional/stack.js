var Stack = function(){
  var someInstance = {};

  //keep track of the number of items in the stack
  var count = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){

    //add items to storage with count as the key
    someInstance[count] = value;

    //add to count
    count++;
  };

  someInstance.pop = function(){

    //if count is greater than 0
    if (count) {
      
      //remove from count
      count--;
    }

    //return the value
    return someInstance[count];
  };

  someInstance.size = function(){

    //return count
    return count;
  };

  return someInstance;
};
