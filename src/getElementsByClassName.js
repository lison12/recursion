// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var resultsWithClass = [];
  var docBod = document.body;

  var iterateBody = function(element) {
    // If body element contains class name
    if (element.classList && element.classList.contains(className)) {
      resultsWithClass.push(element);
    }
    // If body element contains child nodes
    if (element.childNodes) {
      let cNodes = element.childNodes;
      for (var i = 0; i < cNodes.length; i++) {
        iterateBody(cNodes[i]);
      }
    }
  };

  iterateBody(document.body);
  return resultsWithClass;
};

//document.body, element.childNodes, and element.classList
