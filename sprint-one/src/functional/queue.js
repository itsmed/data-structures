var Queue = function(){
  var count = 0;

  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    count++;
    storage[count-1] = value;
  };

  someInstance.dequeue = function(){
    if(count){
      count--;
    }
    var temp = storage[0];

    return temp; 
  };

  someInstance.size = function(){
    return count;
  };

  return someInstance;
};
