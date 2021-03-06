var Queue = function(){

  var someInstance = {};

  //store the count
  var count = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[count] = value;
    count++;
  };

  someInstance.dequeue = function(){
    var temp = storage[0];
    for (var key in storage) {
      storage[key - 1] = storage[key];
      delete storage[key];
    }
    if(count){
      count--;
    }
    return temp;  
  };

  someInstance.size = function(){


    //return the count

    return count;
  };

  return someInstance;
};
