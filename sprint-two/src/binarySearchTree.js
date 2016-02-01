var BinarySearchTree = function(value){

  var node = {};

  node.value = value;

  node.children = {


  left: null,

  right: null
  };



  node.insert = function(value) {
      

    var addToTree = function(current) {
      
      current = current || this;

      var childs = current.children;

      for (var key in childs) {

        if (childs.left === null) {

          childs.left = BinarySearchTree(value);
          return;
        }

        if (childs.right === null) {

          childs.right = BinarySearchTree(value);
          return;
        }

        return addToTree(childs[key]);
      }


    };

    return addToTree(this);
  };

  node.contains = function(target) {

    if (this.value === target) {

      return true;
    }

    var found = false;
    
    var searchTree = function(current) {

      current = current = this;

      var childs = current.children;


      for (var key in childs) {

        if (childs[key] === target) {

          found = true;
          return;
        }

        found = searchTree(childs[key]);
      }
    };

    searchTree(this);

    return found;

  };

  node.depthFirstLog = function (target) {

  };

  return node;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
