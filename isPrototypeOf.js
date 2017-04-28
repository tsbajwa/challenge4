(function () {
  function isPrototypeOf(proto, object) {
    var objectProto = Object.getPrototypeOf(object);
  
    if (objectProto === null) {
      return false;
    }
    if (objectProto === proto) {
      return true
    } else {
      // Recursively check up the object prototype chain to find possible match.
      return isPrototypeOf(proto, objectProto)
    }

  }
  window.isPrototypeOf = isPrototypeOf;
}()); 




