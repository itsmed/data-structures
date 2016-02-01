

// ###Graph Solution

// Instantiate a new graph
var Graph = function(){
  this.container = {};
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(input){
  this.container[input]= [];

};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(value){
  for(var key in this.container){
    if(key===value){
      return true;
    }
  }
  return false;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
  if (node in this.container) {
    delete this.container[node];
  }
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
  if (fromNode in this.container) {
    for (var i = 0; i < this.container[fromNode].length; i++) {
      if (this.container[fromNode][i] === toNode) {
        return true;
      }
    }
  }
  return false;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
  this.container[fromNode].push(toNode);
  this.container[toNode].push(fromNode);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
   if (fromNode in this.container) {
    for (var i = 0; i < this.container[fromNode].length; i++) {
      if (this.container[fromNode][i] === toNode) {
        this.container[fromNode][i] = null;
      }
    }
  }
   if (toNode in this.container) {
    for (var i = 0; i < this.container[toNode].length; i++) {
      if (this.container[toNode][i] === fromNode) {
        this.container[toNode][i] = null;
      }
    }
  }
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
  for (var key in this.container) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



