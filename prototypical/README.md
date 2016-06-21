

As opposed to the classical inheritance structures of other object oriented languages,
JavaScript uses prototypical inheritance


                                   Inheritance
                                        |
                         +-----------------------------+
                         |                             |
                         v                             v
                    Prototypal                     Classical
                         |
         +------------------------------+
         |                              |
         v                              v
Prototypal Pattern             Constructor Pattern







+----------------------+----------------+---------------------------------------+
| Level of Abstraction | Name of Entity |                Comments               |
+----------------------+----------------+---------------------------------------+
| 0                    | John Doe       | Real World Entity.                    |
| 1                    | johnDoe        | Variable holding object.              |
| 2                    | Man            | Class of object johnDoe.              |
| 3                    | Human          | Superclass of class Man.              |
+----------------------+----------------+---------------------------------------+

In classical object-oriented programming languages objects are only abstractions (i.e. all objects have an abstraction level of 1)
And classes are only generalizations (i.e. all classes have an abstraction level greater than 1).


Prototypal object-oriented programming languages are much simpler than classical object-oriented programming languages because in prototypal object-oriented programming we only have one type of abstraction


Classical inheritance is limited to classes inheriting from other classes. However prototypal inheritance includes not only prototypes inheriting from other prototypes but also objects inheriting from prototypes.






True prototypical inheritance is all about objects. Objects inherit properties from other objects.

When you try to access a property of an object the JavaScript engine first searches for that property on the object itself.
If it cannot find the property on the object then it delegates the property access to the prototype of the object.
In this way the property access traverses up the prototype chain until the property is found (in which case it's returned) or the chain ends in null (in which case undefined is returned).



Pros:
1. Prototypal inheritance is simple
2. Prototypal inheritance is powerful
3. Prototypal inheritance is less redundant
4. Prototypal inheritance is dynamic

Two patterns of prototypical inheritnace:
1. Prototypal pattern of prototypical inheritance
2. Constructor pattern of prototypical inheritance

JavaScript uses the constructor pattern of prototypical inheritance, which is the source of much confusion among developers
This means that where in C++ you would use the "class" keyword to define a new class, in JS we just use a function

Two ways of creating objects in prototypical inheritance:
1. Create a brand new object
2. Clone an existing object and extend it

Clone vs Copy

Delegation or Differential Inheritance
Changes to the prototype automatically reflected on all clones
Property access slower because it may need to traverse up the prototype chain
Objects may only delegate to a single prototype

Cloning or Concatenative Inheritance
Changes to the prototype need to be propagated to its clones
Property access is faster because inherited properties are copied
Objects may copy properties from any number of prototypes

The constructor pattern in JavaScript is the prototypal pattern inverted.
The "new" keyword binds the "this" pointer inside the constructor to a clone of the "prototype" of the constructor


In JavaScript, you add methods and properties on the prototype property when you want instances of an object to inherit those methods and properties
This allows us to add new methods for specific instances of objects or even overwrite the prototype all together.

JS only allows objects to delegate to one other object. However it allows you to copy the properties of an arbitrary number of objects
In prototypal inheritance you can hand pick which properties to copy and which properties to omit from different prototypes

In JS you'll never hear about The Diamond Problem



Multiple Inheritance


To create your own heirarchies of inheritance, use Douglas Crockford's Parasitic Combination Inheritance

you pass into it an object that you want to inherit from, and it returns a new object that inherits from the object you passed into it.


One of the most important advantages of prototypal inheritance is that you can add new properties to prototypes after they are created.
This allows you to add new methods to a prototype which will be automatically made available to all the objects which delegate to that prototype.

Allows us to alter prototypes during runtime

Private variables due to closures







Terms:
Object Oriented Programming - Programming model organized around objects rather than "actions" and data rather than logic. Primarily used to encaspulating state.
Encapsulation - Every Object responsible for specific tasks

Abstraction - A general concept formed by extracting common features from specific examples
Generalization - An abstraction of a more specific abstraction.

Inheritance
Polymorphism - objects can share the same interface — how they are accessed and used — while their underlying implementation of the interface may differ
Delegation
Concatenation
Aggregation




"You make prototype objects, and then … make new instances. Objects are mutable in JavaScript, so we can augment the new instances, giving them new fields and methods.
These can then act as prototypes for even newer objects. We don't need classes to make lots of similar objects… Objects inherit from objects. What could be more object oriented than that?"
- Douglas Crockford

"And we were pushing it as a little brother to Java, as a complementary language like Visual Basic was to C++ in Microsoft’s language families at the time."
- Brendan Eich

"This indirection was intended to make the language seem more familiar to classically trained programmers, but failed to do that, as we can see from the very low opinion Java programmers have of JavaScript.
JavaScript’s constructor pattern did not appeal to the classical crowd. It also obscured JavaScript’s true prototypal nature. As a result, there are very few programmers who know how to use the language effectively."
- Douglas Crockford




Players:
Brendan Eich - https://brendaneich.com/
Douglas Crockford - http://www.crockford.com/


Links:

JavaScript: The World's Most Misunderstood Programming Language
http://javascript.crockford.com/javascript.html

Common Misconceptions About Inheritance in JavaScript
https://medium.com/javascript-scene/common-misconceptions-about-inheritance-in-javascript-d5d9bab29b0a#.l30od6ffv

OOP In JavaScript: What You NEED to Know
http://javascriptissexy.com/oop-in-javascript-what-you-need-to-know/

Inheritance and the prototype chain
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain

Classical inheritance vs prototypal inheritance in javascript
http://stackoverflow.com/a/19640910/4808259

Benefits of prototypical inheritance over classical?
http://stackoverflow.com/a/16872315/4808259