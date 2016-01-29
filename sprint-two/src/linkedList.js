var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  list.count = 0;
  list.addToTail = function(value){
    // Give each item in the list a numerical key
    //tail will get the item at count - 1
    //count will be the length of our list
    this.count++;

    //create a new node at the last value in list (count - 1)
    list[this.count - 1] = new Node(value);

    //ensure list is not empty so we can set up pointers
    if (count >= 1) {

      //if count is one, next should be null

      //if count is two, value at 0.next points to value at 1, value at 1.next points to null

      //if count is three, value at 0,next points to value at 1, value at 1.next points to value at 2, value at 2.next points to value at 3

      //etc

    }

    // list[this.count - 2].next = list[this.count - 1];

    //tail gets the value at the end of our list (count - 1)
    this.tail = list[this.count - 1];

    //assign head the first value in list (list at 0)
    list.head = list[0];
    
  };

  list.removeHead = function(){

    // console.log('------------------');
    //assign the head (list at 0) to a temp variable
    var temp = list.head.value;
    
    //iterate through the list
    
    for(var key in list){

      //check if the key is a number, and greater than 0
      if(!isNaN(parseInt(key)) && key >= 1){

        
        //shift values down one key (key - 1)
        list[key-1] = list[key];
       

        //delete to prevent duplicates
  
        delete list[key];
      }

      delete list.head;

      list.head = list[0];
    }
  
    //return the old head value
    return temp;
    

  };


  list.contains = function(target){
 
    for (var key in list) {
   
      if (list[key].value === target) {
        
        return true;
      }
console.log('list', list);
    }
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
