var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  console.log('i', this._storage[i]);

  var storage = this._storage;

  if (storage[i] ===  undefined) {

    storage[i] = [];

    storage[i].push(k, v);
  }

  for (var j = 0; j < storage.length; j++ ) {
    
    if (storage[j][0] === k) {
      
      storage[j][1] = v;
    }
  }

  
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);



  for (var j = 0; j < storage.length; j++) {

    if (storage[j][0] === k) {

      return storage[j][1];
    }
  }

  return 'Value not found';

};

HashTable.prototype.remove = function(k){

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
