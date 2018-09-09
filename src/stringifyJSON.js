// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var string = ''
  //obj.forEach(function(ele) {

    // Primitive Types
  if (typeof obj === 'number' || typeof obj === 'boolean' || typeof obj === 'symbol') {
    string += obj.toString();
  } else if (obj === null) {
    string += obj;
  } else if (typeof obj === 'string') {
    string += '"' + obj + '"';
  }
    // Array Types
  if (Array.isArray(obj)) {
    string += '[';
    obj.forEach(function(ele, i, arr) {
      string += stringifyJSON(ele);
      if (i !== obj.length - 1) {
        string += ',';
      } 
    })
    string += ']';
  }
    // Object Types
  else if (obj instanceof Object) {
    string += '{'; 
    for (var key in obj) {
      if (typeof obj[key] === 'function' || typeof obj[key] === 'undefined') {
        string += '';    //skip or do nothing
      } else {
        string += stringifyJSON(key) + ':';
        string += stringifyJSON(obj[key]);
        if (key !== Object.keys(obj)[Object.keys(obj).length - 1]) {
          string += ',';
        } 
      }
    }
    string += '}';
  }
  return string;
};

