  var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  //children is an array
  newTree.children = [];  // fix me

  //if first node in our tree, parent gets set to null
  newTree.parent = null;

  //assign out treeMethods to instances of newTree
  newTree.addChild = treeMethods.addChild;

  newTree.contains = treeMethods.contains;

  // if the new instance of Tree has a parent value of null, set it as the tree head
  if (newTree.parent === null) {
    newTree.head = newTree;
  }

  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){

  // this.children.push(value);

  //assign a new node variable by calling Tree with the value passed in here
  var newNode = Tree(value);
  
  //assing a that variable since 'this' will point to the parent object
  var current = newNode;

  //assign the new node's parent to 'this'
  current.parent = this;
  // console.log('this', this); 

  //assign the head to the original node
  current.head = this.head;

  //add the new node to children array (this.children)
  this.children.push(newNode);



};

treeMethods.contains = function(target){

  var found = false;
  //optional paramater gets head node (this) if nothing is passed in
  var that = this;
  
  var search = function (current) {

    current = current || that;
    //check the current node's value against target
    
    if (current.value === target) {

      //if a match, return true
      found =  true;
    }

    for (var i = 0; i < current.children.length; i++) {
      
      found = search(current.children[i]);
    }

    return found;
  };

  return search(this);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */