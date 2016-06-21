 if (typeof Object.create !== 'function') {
    Object.create = function (o) {
        function F() {
        }
​
        F.prototype = o;
        return new F();
    };
}

Object.create = function (o) {
​//It creates a temporary constructor F()​
    function F() {
    }
​//And set the prototype of the this constructor to the parametric (passed-in) o object​
​//so that the F() constructor now inherits all the properties and methods of o​
    F.prototype = o;
​
​//Then it returns a new, empty object (an instance of F())​
​//Note that this instance of F inherits from the passed-in (parametric object) o object. ​
​//Or you can say it copied all of the o object's properties and methods​
    return new F();
}


 function inheritPrototype(childObject, parentObject) {
    // As discussed above, we use the Crockford’s method to copy the properties and methods from the parentObject onto the childObject​
​// So the copyOfParent object now has everything the parentObject has ​
    var copyOfParent = Object.create(parentObject.prototype);
​
    //Then we set the constructor of this new object to point to the childObject.​
​// Why do we manually set the copyOfParent constructor here, see the explanation immediately following this code block.​
    copyOfParent.constructor = childObject;
​
    // Then we set the childObject prototype to copyOfParent, so that the childObject can in turn inherit everything from copyOfParent (from parentObject)​
   childObject.prototype = copyOfParent;
}