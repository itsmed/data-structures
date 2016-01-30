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


  // your code here
  // newTree.children = null;  // fix me


var treeMethods = {};

treeMethods.addChild = function(value){
  // console.log(this.children);
  // console.log('value', value);
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

  // console.log('parent', current.parent);
  // console.log('current: ', current);
  // console.log('we want to see the number of children in child', current.children);
  

  //add the new node to children array (this.children)
  this.children.push(newNode);



};

treeMethods.contains = function(target, current){

  //optional paramater gets head node (this) if nothing is passed in
  current = current || this;

  //check the current node's value against target
  if (current.value === target) {

    //if a match, return true
    return true;
  }
  // console.log('current', current);
  // console.log('length', current.children.length);
  // console.log(current.children.length >= 1);
  // console.log(typeof current.children);
  //if current has children
  if (current.children.length >= 1) {
    
    //loop through the children array
    for (var i = 0; i < current.children.length; i++ ){
    //   console.log('i', i);
    // console.log('current value', current.children[i].value);
    // console.log('target: ', target);
      //call contains recursively on the child nodes
      // console.log('i', i);
      // console.log('child', current.children[i]);
      return current.contains(target, current.children[i]);
    }

  }


  //otherwise we return false
  return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */


// if parent is set to null, then we need to set the parent to the new instance