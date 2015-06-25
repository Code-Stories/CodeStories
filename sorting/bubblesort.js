Array.prototype.sort = function (comp) {
  var length = this.length - 1;
  do {
    var swapped = false;
    for(var i = 0; i < length; ++i) {
      if ( comp( this[i], this[i+1]) >0) {
        var temp = this[i];
        this[i] = this[i+1];
        this[i+1] = temp;
        swapped = true;
      }
    }
  }
  while(swapped == true);
  return this;
};