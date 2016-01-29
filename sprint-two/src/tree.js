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

  console.log('parent', current.parent);
  console.log('current: ', current);
  console.log('we want to see the number of children in child', current.children);
  

  //add the new node to children array (this.children)
  this.children.push(newNode);



};

treeMethods.contains = function(target){




};


/*
 * Complexity: What is the time complexity of the above functions?
 */


// if parent is set to null, then we need to set the parent to the new instance