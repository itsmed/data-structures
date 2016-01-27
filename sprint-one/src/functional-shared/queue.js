var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
	var someInstance = {
	
		storage : {},
		count : 0
	};

	_.extend(someInstance, queueMethods);

	return someInstance;

};



var queueMethods = {};

queueMethods.dequeue = function() {
	
	var temp = this.storage[0];

	for (var key in this.storage) {

		this.storage[key - 1] = this.storage[key];

		delete this.storage[key];

	}

	if (this.count) {

		this.count--;

	}

	return temp;

};

queueMethods.enqueue = function(value) {
	
	this.storage[this.count] = value;
	
	this.count++;
};

queueMethods.size = function() {
	
	return this.count;

};