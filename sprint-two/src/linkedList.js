var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  list.count = 0;

  list.addToTail = function(value){

    // add one to count
    this.count++;

    //create a new instance of Node and assign it to the tail (last item in list)
    list[this.count - 1] = new Node(value);

    //assign tail to the last value in list or null if list is empty
    this.tail = list[this.count - 1] || null;

    //assign head to the first value in list or null if list is empty
    this.head = list[0] || null;

    //tail.next should point to null
    //if count is above 1, then .next should point to the value before it
    if (this.count > 1) {
      list[this.count - 2].next = list[this.count - 1];
    }
  };

  list.removeHead = function(){

    //assign value of head to temp variable
    var temp = list[0];

    //iterate through list
    for (var key in list) {

      //ensure that the key is a number
      if (!isNaN(parseInt(key, 10)) && key >= 1) {

        //shift the values to the key with a lower number
        list[key - 1] = list[key];

        //delete to prevent duplicates
        delete list[key];
      }

    }
    //reassign null to list.head
    list.head = list[0];

    //return the old head value
    return temp.value;
  };


  list.contains = function(target) {

    //result variable to hold return
    var result = true;

    //iterate through the list
    for (var key in list) {
   
      //check the values in list against target
      if (target === list[key].value) {
        
        //if there is a match return result
        return result;
      }
    }
    //otherwise return false
    return false;
  };

return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */