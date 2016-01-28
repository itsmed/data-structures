var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    this.tail = new Node(value);
    // console.log('tail', this.tail.value);
    // if no values in list yet
    if(list.head === null){
      // this.head.value = value;
      // this.tail.value = value;
      // this.head.next = value;
      // alert('yatta');
      this.head = this.tail;
    }
    //if 1+ value already exists in the list
    else {

      this.head.value = this.tail.value;
      this.tail.value = value;
      this.head.next = this.tail.value;

    }


  };

  list.removeHead = function(){
    console.log('head.val at begging', this.head);
    var temp = this.head.value;
    delete this.head;
    console.log('head.val after deleted', this.head);
    this.head = this.tail;
    // console.log('this remove head', this);
    console.log('this.head after assigning tail to head', this.head);
    console.log('this.tail', this.tail);
     

    // return this.value;
    return temp;

  };

  list.contains = function(target){
    // for (var key in list) {
      if (target in list) {
        return true;
      }
    // }
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
