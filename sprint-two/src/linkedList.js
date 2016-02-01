var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  list.next = null;

  list.addToTail = function(value){

    // create a new node instance
    var node = new Node(value);
    
    //if there is no head, assign it to node
    if (list.head === null) {

      this.head = node;

      this.tail = node;

      this.head.next = node;

    }

    this.tail.next = node;

    this.tail = node;

    this.tail.next = null;
  
  };

  list.removeHead = function(){

    if (this.head) {
      
      var temp = this.head.value;

      this.head = this.head.next;


    return temp;

    }

    return 'Empty list';

  };


  list.contains = function(target) {

    var that = this;

    if (target === undefined) {

      return undefined;
    }
    
    function search(current) {

      current = current || that;
    
var found;
      if (current.value === target) {

        found = true;
console.log('if found', found);
        return found;
      }

      if ( (current.value !== target) && (current.next === null) ) {

        found = false;
console.log('if tail', found);
        return found;
      }
      console.log('found before recursion', found);

      found = search(current.next);

      return found;
    }

    return search(this.head);
    
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