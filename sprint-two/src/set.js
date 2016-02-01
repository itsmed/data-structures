var Set = function(){
  var set = Object.create(setPrototype);
  set.storage = {};
  
  //count variable
  set.count = 0;

  //size returns the size of the set

  set.count === 0 ? set.size = null : set.size = set.count - 1;

  return set;
};

var setPrototype = {};

setPrototype.add = function(item){

  //if the item is not in the set
  if (!(item in this.storage)) {

    //add item to storage object with key as item
    this.storage[item] = item;
  }
};

setPrototype.contains = function(item){

  //if the item is in storage object
  if (item in this.storage) {
    //return true
    return true;
  }
  //otherwise return false
  return false;
};

setPrototype.remove = function(item){

  //if the item is in storage object
  if (item in this.storage) {
    //delete the item
    delete this.storage[item];
    
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
