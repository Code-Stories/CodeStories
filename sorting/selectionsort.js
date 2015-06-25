Array.prototype.sort = function(comp) {

      var min, tmp , arr = this;
      for (var i = 0; i < arr.length; i++) {
        min = i;
        for (var j = i + 1; j < arr.length; j++) {
          if ( comp(arr[min], arr[j]) > 0 ) {
            min = j;
          }
        }
        if (min != i) {
          tmp = arr[i];
          arr[i] = arr[min];
          arr[min] = tmp;
        }
      }
    
      return arr;
      }
