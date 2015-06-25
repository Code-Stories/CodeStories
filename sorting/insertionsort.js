
Array.prototype.sort = function (comp) {
	var arr = this;
      for (var i = 1; i < arr.length; i++) {
        var tmp = arr[i],
            j = i;
        while (comp(arr[j - 1] , tmp ) > 0 ) {
          arr[j] = arr[j - 1];
          --j;
        }
        arr[j] = tmp;
      }
    
      return arr;
    };
